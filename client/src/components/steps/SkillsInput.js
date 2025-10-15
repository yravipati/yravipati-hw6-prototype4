import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Chip,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';

const suggestedSkills = {
  technical: [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'Data Analysis',
    'SQL',
    'Machine Learning',
    'Excel',
    'R',
    'Java',
    'C++',
    'AWS',
    'Docker',
  ],
  soft: [
    'Leadership',
    'Communication',
    'Public Speaking',
    'Teamwork',
    'Problem Solving',
    'Project Management',
    'Time Management',
    'Critical Thinking',
    'Adaptability',
    'Creativity',
    'Negotiation',
  ],
};

function SkillsInput({ formData, updateFormData }) {
  const [newSkill, setNewSkill] = useState('');
  const [skillType, setSkillType] = useState('technical');

  const addSkill = (skill, type) => {
    if (skill.trim() === '') return;
    
    const skillObj = { skill: skill.trim(), type };
    const isDuplicate = formData.skills.some(
      (s) => s.skill.toLowerCase() === skill.toLowerCase()
    );

    if (!isDuplicate) {
      updateFormData({
        skills: [...formData.skills, skillObj],
      });
    }
    setNewSkill('');
  };

  const removeSkill = (skillToRemove) => {
    updateFormData({
      skills: formData.skills.filter((s) => s.skill !== skillToRemove),
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(newSkill, skillType);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 1 }}>
        What are your skills?
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
        Add both technical and soft skills
      </Typography>

      {/* Add Custom Skill */}
      <Paper className="glass-card" sx={{ mb: 3, p: 2 }}>
        <ToggleButtonGroup
          value={skillType}
          exclusive
          onChange={(e, value) => value && setSkillType(value)}
          fullWidth
          sx={{ mb: 2 }}
        >
          <ToggleButton
            value="technical"
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
              '&.Mui-selected': {
                backgroundColor: 'rgba(102, 126, 234, 0.9)',
                color: 'white',
                borderColor: 'white',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 1)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            <CodeIcon sx={{ mr: 1 }} /> Technical
          </ToggleButton>
          <ToggleButton
            value="soft"
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
              '&.Mui-selected': {
                backgroundColor: 'rgba(102, 126, 234, 0.9)',
                color: 'white',
                borderColor: 'white',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 1)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            <PeopleIcon sx={{ mr: 1 }} /> Soft Skills
          </ToggleButton>
        </ToggleButtonGroup>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder={`Add a ${skillType} skill...`}
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  borderWidth: '2px',
                },
              },
              '& .MuiInputBase-input': {
                color: 'rgba(0, 0, 0, 0.87)',
                '&::placeholder': {
                  color: 'rgba(0, 0, 0, 0.5)',
                  opacity: 1,
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={() => addSkill(newSkill, skillType)}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              minWidth: '100px',
              borderRadius: '12px',
            }}
          >
            <AddIcon />
          </Button>
        </Box>
      </Paper>

      {/* Suggested Skills */}
      <Paper className="glass-card" sx={{ mb: 2, p: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
          <CodeIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'text-bottom' }} />
          Suggested Technical Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {suggestedSkills.technical.map((skill) => {
            const isAdded = formData.skills.some((s) => s.skill === skill);
            return (
              <Chip
                key={skill}
                label={skill}
                onClick={() => !isAdded && addSkill(skill, 'technical')}
                disabled={isAdded}
                sx={{
                  backgroundColor: isAdded
                    ? 'rgba(200, 200, 200, 0.5)'
                    : 'rgba(255, 255, 255, 0.9)',
                  color: isAdded ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.87)',
                  fontWeight: isAdded ? 400 : 500,
                  '&:hover': {
                    backgroundColor: isAdded
                      ? 'rgba(200, 200, 200, 0.5)'
                      : 'rgba(255, 255, 255, 1)',
                  },
                  cursor: isAdded ? 'default' : 'pointer',
                }}
              />
            );
          })}
        </Box>
      </Paper>

      <Paper className="glass-card" sx={{ mb: 3, p: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
          <PeopleIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'text-bottom' }} />
          Suggested Soft Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {suggestedSkills.soft.map((skill) => {
            const isAdded = formData.skills.some((s) => s.skill === skill);
            return (
              <Chip
                key={skill}
                label={skill}
                onClick={() => !isAdded && addSkill(skill, 'soft')}
                disabled={isAdded}
                sx={{
                  backgroundColor: isAdded
                    ? 'rgba(200, 200, 200, 0.5)'
                    : 'rgba(255, 255, 255, 0.9)',
                  color: isAdded ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.87)',
                  fontWeight: isAdded ? 400 : 500,
                  '&:hover': {
                    backgroundColor: isAdded
                      ? 'rgba(200, 200, 200, 0.5)'
                      : 'rgba(255, 255, 255, 1)',
                  },
                  cursor: isAdded ? 'default' : 'pointer',
                }}
              />
            );
          })}
        </Box>
      </Paper>

      {/* Selected Skills */}
      {formData.skills.length > 0 && (
        <Paper className="glass-card" sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
            Your Skills ({formData.skills.length})
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {formData.skills.map((skillObj) => (
              <Chip
                key={skillObj.skill}
                label={skillObj.skill}
                onDelete={() => removeSkill(skillObj.skill)}
                sx={{
                  backgroundColor:
                    skillObj.type === 'technical'
                      ? 'rgba(102, 126, 234, 0.8)'
                      : 'rgba(236, 72, 153, 0.8)',
                  color: 'white',
                  fontWeight: 500,
                  '& .MuiChip-deleteIcon': {
                    color: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      color: 'white',
                    },
                  },
                }}
              />
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
}

export default SkillsInput;

