import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';

const classYears = [
  'Freshman',
  'Sophomore',
  'Junior',
  'Senior',
  'Graduate',
  'Alumni',
];

function PersonalInfo({ formData, updateFormData }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 3 }}>
        Let's start with some basic information
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="body2" sx={{ color: 'white', mb: 0.5, fontWeight: 500 }}>
            Email Address *
          </Typography>
          <TextField
            fullWidth
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            required
            placeholder="your.name@harvard.edu"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'rgba(102, 126, 234, 0.7)' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
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
                  color: 'rgba(0, 0, 0, 0.4)',
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ color: 'white', mb: 0.5, fontWeight: 500 }}>
              First Name *
            </Typography>
            <TextField
              fullWidth
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              required
              placeholder="John"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'rgba(102, 126, 234, 0.7)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
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
                    color: 'rgba(0, 0, 0, 0.4)',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ color: 'white', mb: 0.5, fontWeight: 500 }}>
              Last Name
            </Typography>
            <TextField
              fullWidth
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
              placeholder="Doe"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
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
                    color: 'rgba(0, 0, 0, 0.4)',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Box>
          <Typography variant="body2" sx={{ color: 'white', mb: 0.5, fontWeight: 500 }}>
            Class Year *
          </Typography>
          <TextField
            fullWidth
            select
            value={formData.classYear}
            onChange={(e) => updateFormData({ classYear: e.target.value })}
            required
            placeholder="Select your class year"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon sx={{ color: 'rgba(102, 126, 234, 0.7)' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(102, 126, 234, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                  borderWidth: '2px',
                },
              },
              '& .MuiSelect-select': {
                color: 'rgba(0, 0, 0, 0.87)',
              },
            }}
          >
            {classYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: -1 }}>
          * All fields with asterisk are required
        </Typography>
      </Box>
    </Box>
  );
}

export default PersonalInfo;

