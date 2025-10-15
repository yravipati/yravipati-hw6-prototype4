import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import PersonalInfo from './steps/PersonalInfo';
import CareerInterests from './steps/CareerInterests';
import SkillsInput from './steps/SkillsInput';
import GoalsSelection from './steps/GoalsSelection';
import axios from 'axios';
import './OnboardingSurvey.css';

const steps = ['Personal Info', 'Career Interests', 'Skills', 'Goals'];

// API URL - works in both development and production
const API_URL = process.env.REACT_APP_API_URL || '/api';

function OnboardingSurvey() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    classYear: '',
    interests: [],
    skills: [],
    goals: [],
  });

  const handleNext = () => {
    // Validation for each step
    if (activeStep === 0) {
      if (!formData.email || !formData.firstName || !formData.classYear) {
        setError('Please fill in all required fields');
        return;
      }
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        return;
      }
    } else if (activeStep === 1 && formData.interests.length === 0) {
      setError('Please select at least one career interest');
      return;
    } else if (activeStep === 2 && formData.skills.length === 0) {
      setError('Please add at least one skill');
      return;
    } else if (activeStep === 3 && formData.goals.length === 0) {
      setError('Please select at least one goal');
      return;
    }

    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    if (formData.goals.length === 0) {
      setError('Please select at least one goal');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/user/profile`, formData);
      console.log('Profile saved:', response.data);
      
      // Navigate to confirmation page
      navigate('/confirmation', { 
        state: { 
          userData: formData,
          userId: response.data.userId 
        } 
      });
    } catch (err) {
      console.error('Error saving profile:', err);
      setError(err.response?.data?.error || 'Failed to save profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    setError('');
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <CareerInterests formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <SkillsInput formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <GoalsSelection formData={formData} updateFormData={updateFormData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box className="survey-container">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper className="glass-container" elevation={0} sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 700 }}>
              Welcome to Eventus
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Let's personalize your experience with a quick survey
            </Typography>
          </Box>

          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel 
                  sx={{
                    '& .MuiStepLabel-label': { color: 'rgba(255, 255, 255, 0.8)' },
                    '& .MuiStepLabel-label.Mui-active': { color: 'white', fontWeight: 600 },
                    '& .MuiStepLabel-label.Mui-completed': { color: 'rgba(255, 255, 255, 0.9)' },
                    '& .MuiStepIcon-root': { color: 'rgba(255, 255, 255, 0.5)' },
                    '& .MuiStepIcon-root.Mui-active': { color: 'white' },
                    '& .MuiStepIcon-root.Mui-completed': { color: '#4ade80' },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Step Content */}
          <Box sx={{ mb: 4, minHeight: '300px' }}>
            {getStepContent(activeStep)}
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              disabled={loading}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5568d3 0%, #63428b 100%)',
                },
              }}
            >
              {loading ? 'Saving...' : activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default OnboardingSurvey;

