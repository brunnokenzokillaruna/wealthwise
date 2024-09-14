// wealth-wise-frontend/src/components/Common/CustomButton.jsx

import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        mt: 2,
        mb: 2,
        py: 1.5,
        px: 4,
        backgroundColor: 'primary.main',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '1rem',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
