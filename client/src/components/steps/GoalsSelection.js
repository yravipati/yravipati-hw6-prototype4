import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import ExploreIcon from '@mui/icons-material/Explore';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const goalOptions = [
  {
    id: 'internship',
    label: 'Internship',
    description: 'Find summer or semester internship opportunities',
    icon: WorkIcon,
  },
  {
    id: 'full-time',
    label: 'Full-time Job',
    description: 'Explore full-time career opportunities',
    icon: BusinessCenterIcon,
  },
  {
    id: 'networking',
    label: 'Networking',
    description: 'Connect with professionals and expand your network',
    icon: PeopleIcon,
  },
  {
    id: 'exploration',
    label: 'Career Exploration',
    description: 'Discover different career paths and industries',
    icon: ExploreIcon,
  },
  {
    id: 'skills',
    label: 'Skill Development',
    description: 'Learn new skills and enhance existing ones',
    icon: SchoolIcon,
  },
];

function GoalsSelection({ formData, updateFormData }) {
  const toggleGoal = (goalLabel) => {
    const currentGoals = formData.goals || [];
    if (currentGoals.includes(goalLabel)) {
      updateFormData({
        goals: currentGoals.filter((g) => g !== goalLabel),
      });
    } else {
      updateFormData({
        goals: [...currentGoals, goalLabel],
      });
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 1 }}>
        What are your primary goals?
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
        Select one or more goals to help us personalize your experience
      </Typography>

      <Grid container spacing={2}>
        {goalOptions.map((goal) => {
          const Icon = goal.icon;
          const isSelected = formData.goals.includes(goal.label);

          return (
            <Grid item xs={12} sm={6} key={goal.id}>
              <Card
                className="glass-card"
                sx={{
                  height: '100%',
                  position: 'relative',
                  border: isSelected
                    ? '2px solid white'
                    : '1px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: isSelected
                    ? 'rgba(102, 126, 234, 0.4)'
                    : 'rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    backgroundColor: isSelected
                      ? 'rgba(102, 126, 234, 0.5)'
                      : 'rgba(255, 255, 255, 0.25)',
                  },
                }}
              >
                <CardActionArea onClick={() => toggleGoal(goal.label)} sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon
                          sx={{
                            fontSize: 32,
                            color: isSelected ? 'white' : 'rgba(255, 255, 255, 0.8)',
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'white',
                            fontWeight: isSelected ? 700 : 600,
                          }}
                        >
                          {goal.label}
                        </Typography>
                      </Box>
                      {isSelected && (
                        <CheckCircleIcon
                          sx={{
                            color: '#4ade80',
                            fontSize: 28,
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        mt: 1,
                      }}
                    >
                      {goal.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 3, display: 'block' }}>
        Selected: {formData.goals.length} goal(s)
      </Typography>
    </Box>
  );
}

export default GoalsSelection;

