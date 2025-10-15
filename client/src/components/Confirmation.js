import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Grid,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, userId } = location.state || {};

  if (!userData) {
    return (
      <Box className="confirmation-container">
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper className="glass-container" elevation={0} sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: 'white' }}>
              No data found. Please complete the survey first.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{ mt: 3 }}
            >
              Go to Survey
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box className="confirmation-container">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper className="glass-container" elevation={0} sx={{ p: 4 }}>
          {/* Success Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckCircleIcon
              sx={{
                fontSize: 80,
                color: '#4ade80',
                mb: 2,
                animation: 'scaleIn 0.5s ease-out',
              }}
            />
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 700 }}>
              Profile Created Successfully! 🎉
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Thank you for completing the onboarding survey. Your personalized experience is ready!
            </Typography>
          </Box>

          <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

          {/* Profile Summary */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, display: 'flex', alignItems: 'center' }}>
              <PersonIcon sx={{ mr: 1 }} /> Personal Information
            </Typography>
            <Paper className="glass-card" sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Name
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                    {userData.firstName} {userData.lastName}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                    {userData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Class Year
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                    {userData.classYear}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Profile ID
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                    #{userId}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          {/* Career Interests */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ mr: 1 }} /> Career Interests ({userData.interests.length})
            </Typography>
            <Paper className="glass-card" sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userData.interests.map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.8)',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>

          {/* Skills */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, display: 'flex', alignItems: 'center' }}>
              <CodeIcon sx={{ mr: 1 }} /> Skills ({userData.skills.length})
            </Typography>
            <Paper className="glass-card" sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userData.skills.map((skillObj) => (
                  <Chip
                    key={skillObj.skill}
                    label={skillObj.skill}
                    sx={{
                      backgroundColor:
                        skillObj.type === 'technical'
                          ? 'rgba(102, 126, 234, 0.8)'
                          : 'rgba(236, 72, 153, 0.8)',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>

          {/* Goals */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2, display: 'flex', alignItems: 'center' }}>
              <FlagIcon sx={{ mr: 1 }} /> Goals ({userData.goals.length})
            </Typography>
            <Paper className="glass-card" sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userData.goals.map((goal) => (
                  <Chip
                    key={goal}
                    label={goal}
                    sx={{
                      backgroundColor: 'rgba(139, 92, 246, 0.8)',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>

          <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

          {/* Next Steps */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              What's Next?
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3 }}>
              Your profile is ready! The next step would be to upload your resume to complete your profile setup.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '12px',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5568d3 0%, #63428b 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                // In a real app, this would navigate to resume upload
                alert('Resume upload feature coming soon!');
              }}
            >
              Continue to Resume Upload
            </Button>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="text"
                onClick={() => navigate('/')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Go back to survey
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Confirmation;

