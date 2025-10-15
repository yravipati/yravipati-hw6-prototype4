import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Paper,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const careerOptions = [
  { category: 'Tech', roles: ['Software Engineering', 'Data Science', 'Product Management', 'UX/UI Design'] },
  { category: 'Finance', roles: ['Investment Banking', 'Private Equity', 'Venture Capital', 'Asset Management'] },
  { category: 'Consulting', roles: ['Management Consulting', 'Strategy Consulting', 'Technology Consulting'] },
  { category: 'Healthcare', roles: ['Medicine', 'Biotech', 'Healthcare Administration', 'Public Health'] },
  { category: 'Law', roles: ['Corporate Law', 'Public Interest Law', 'Intellectual Property'] },
  { category: 'Education', roles: ['Teaching', 'EdTech', 'Higher Education Administration'] },
  { category: 'Research', roles: ['Academic Research', 'Industry Research', 'Think Tanks'] },
  { category: 'Entrepreneurship', roles: ['Startups', 'Social Enterprise', 'Innovation'] },
  { category: 'Public Service', roles: ['Government', 'Non-Profit', 'Policy', 'International Development'] },
  { category: 'Creative', roles: ['Journalism', 'Marketing', 'Media & Entertainment', 'Design'] },
];

function CareerInterests({ formData, updateFormData }) {
  const toggleInterest = (interest) => {
    const currentInterests = formData.interests || [];
    if (currentInterests.includes(interest)) {
      updateFormData({
        interests: currentInterests.filter((i) => i !== interest),
      });
    } else {
      updateFormData({
        interests: [...currentInterests, interest],
      });
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ color: 'white', mb: 1 }}>
        What are your career interests?
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
        Select all industries and roles that interest you
      </Typography>

      <Box sx={{ maxHeight: '400px', overflowY: 'auto', pr: 1 }}>
        {careerOptions.map((category) => (
          <Paper
            key={category.category}
            className="glass-card"
            sx={{ mb: 2, p: 2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <WorkIcon sx={{ color: 'white', mr: 1 }} />
              <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 600 }}>
                {category.category}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {category.roles.map((role) => {
                const interestKey = `${category.category} - ${role}`;
                const isSelected = formData.interests.includes(interestKey);
                return (
                  <Chip
                    key={role}
                    label={role}
                    onClick={() => toggleInterest(interestKey)}
                    sx={{
                      backgroundColor: isSelected
                        ? 'rgba(102, 126, 234, 0.9)'
                        : 'rgba(255, 255, 255, 0.9)',
                      color: isSelected ? 'white' : 'rgba(0, 0, 0, 0.87)',
                      fontWeight: isSelected ? 600 : 500,
                      border: isSelected ? '2px solid white' : '1px solid rgba(255, 255, 255, 0.5)',
                      '&:hover': {
                        backgroundColor: isSelected
                          ? 'rgba(102, 126, 234, 1)'
                          : 'rgba(255, 255, 255, 1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                );
              })}
            </Box>
          </Paper>
        ))}
      </Box>

      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 2, display: 'block' }}>
        Selected: {formData.interests.length} interest(s)
      </Typography>
    </Box>
  );
}

export default CareerInterests;

