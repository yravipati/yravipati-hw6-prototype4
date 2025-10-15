const express = require('express');
const router = express.Router();
const pool = require('../db/config');

// GET user profile by email
router.get('/profile/:email', async (req, res) => {
  try {
    const { email } = req.params;
    
    // Get user profile
    const userResult = await pool.query(
      'SELECT * FROM user_profiles WHERE email = $1',
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = userResult.rows[0];

    // Get user interests
    const interestsResult = await pool.query(
      'SELECT interest FROM user_interests WHERE user_id = $1',
      [user.id]
    );

    // Get user skills
    const skillsResult = await pool.query(
      'SELECT skill, skill_type FROM user_skills WHERE user_id = $1',
      [user.id]
    );

    // Get user goals
    const goalsResult = await pool.query(
      'SELECT goal FROM user_goals WHERE user_id = $1',
      [user.id]
    );

    const profile = {
      ...user,
      interests: interestsResult.rows.map(r => r.interest),
      skills: skillsResult.rows.map(r => ({ skill: r.skill, type: r.skill_type })),
      goals: goalsResult.rows.map(r => r.goal),
    };

    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// POST create/update user profile
router.post('/profile', async (req, res) => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    const { email, firstName, lastName, classYear, interests, skills, goals } = req.body;

    // Validation
    if (!email || !classYear || !interests || !skills || !goals) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['email', 'classYear', 'interests', 'skills', 'goals']
      });
    }

    // Check if user already exists
    const existingUser = await client.query(
      'SELECT id FROM user_profiles WHERE email = $1',
      [email]
    );

    let userId;

    if (existingUser.rows.length > 0) {
      // Update existing user
      userId = existingUser.rows[0].id;
      await client.query(
        `UPDATE user_profiles 
         SET first_name = $1, last_name = $2, class_year = $3, updated_at = CURRENT_TIMESTAMP
         WHERE id = $4`,
        [firstName, lastName, classYear, userId]
      );

      // Delete old related data
      await client.query('DELETE FROM user_interests WHERE user_id = $1', [userId]);
      await client.query('DELETE FROM user_skills WHERE user_id = $1', [userId]);
      await client.query('DELETE FROM user_goals WHERE user_id = $1', [userId]);
    } else {
      // Create new user
      const userResult = await client.query(
        `INSERT INTO user_profiles (email, first_name, last_name, class_year) 
         VALUES ($1, $2, $3, $4) 
         RETURNING id`,
        [email, firstName, lastName, classYear]
      );
      userId = userResult.rows[0].id;
    }

    // Insert interests
    for (const interest of interests) {
      await client.query(
        'INSERT INTO user_interests (user_id, interest) VALUES ($1, $2)',
        [userId, interest]
      );
    }

    // Insert skills
    for (const skillObj of skills) {
      await client.query(
        'INSERT INTO user_skills (user_id, skill, skill_type) VALUES ($1, $2, $3)',
        [userId, skillObj.skill, skillObj.type]
      );
    }

    // Insert goals
    for (const goal of goals) {
      await client.query(
        'INSERT INTO user_goals (user_id, goal) VALUES ($1, $2)',
        [userId, goal]
      );
    }

    await client.query('COMMIT');

    res.status(201).json({ 
      success: true, 
      message: 'Profile saved successfully',
      userId 
    });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Failed to save profile', message: error.message });
  } finally {
    client.release();
  }
});

// GET all profiles (for testing)
router.get('/profiles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM user_profiles ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

module.exports = router;

