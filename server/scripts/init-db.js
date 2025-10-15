const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Create a pool for the initial connection (to postgres database)
const initPool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

async function initializeDatabase() {
  try {
    // Check if database exists
    const dbName = process.env.DB_NAME || 'eventus_db';
    const checkDb = await initPool.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (checkDb.rows.length === 0) {
      // Create database if it doesn't exist
      await initPool.query(`CREATE DATABASE ${dbName}`);
      console.log(`✅ Database '${dbName}' created successfully`);
    } else {
      console.log(`✅ Database '${dbName}' already exists`);
    }

    await initPool.end();

    // Now connect to the new database and run schema
    const appPool = new Pool({
      user: process.env.DB_USER || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: dbName,
      password: process.env.DB_PASSWORD || 'postgres',
      port: process.env.DB_PORT || 5432,
    });

    // Read and execute schema
    const schemaPath = path.join(__dirname, '..', 'db', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    await appPool.query(schema);
    console.log('✅ Database schema created successfully');

    // Insert mock data
    await insertMockData(appPool);

    await appPool.end();
    console.log('✅ Database initialization complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  }
}

async function insertMockData(pool) {
  try {
    // Insert sample user profile
    const userResult = await pool.query(
      `INSERT INTO user_profiles (email, first_name, last_name, class_year) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id`,
      ['demo.user@harvard.edu', 'Demo', 'User', 'Junior']
    );

    const userId = userResult.rows[0].id;

    // Insert sample interests
    const interests = [
      'Tech - Software Engineering',
      'Finance - Investment Banking',
    ];
    for (const interest of interests) {
      await pool.query(
        `INSERT INTO user_interests (user_id, interest) VALUES ($1, $2)`,
        [userId, interest]
      );
    }

    // Insert sample skills
    const skills = [
      { skill: 'Python', type: 'technical' },
      { skill: 'Data Analysis', type: 'technical' },
      { skill: 'Public Speaking', type: 'soft' },
    ];
    for (const { skill, type } of skills) {
      await pool.query(
        `INSERT INTO user_skills (user_id, skill, skill_type) VALUES ($1, $2, $3)`,
        [userId, skill, type]
      );
    }

    // Insert sample goals
    const goals = ['Internship', 'Networking', 'Skill development'];
    for (const goal of goals) {
      await pool.query(
        `INSERT INTO user_goals (user_id, goal) VALUES ($1, $2)`,
        [userId, goal]
      );
    }

    console.log('✅ Mock data inserted successfully');
  } catch (error) {
    console.error('❌ Error inserting mock data:', error);
  }
}

initializeDatabase();

