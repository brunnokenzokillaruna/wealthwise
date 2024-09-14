// wealth-wise-frontend/src/pages/AuthPage.jsx

import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';
import loginBackground from '../assets/images/login-background.jpg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Image Section */}
      {!isSmallScreen && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            backgroundImage: `url(${loginBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.6s ease-in-out',
            transform: isLogin ? 'translateX(0%)' : 'translateX(100%)',
            zIndex: 2,
          }}
        />
      )}

      {/* Form Section */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: isLogin ? (isSmallScreen ? '0%' : '50%') : '0%',
          width: isSmallScreen ? '100%' : '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.6s ease-in-out, left 0.6s ease-in-out',
          transform: isLogin ? 'translateX(0%)' : isSmallScreen ? 'translateX(0%)' : 'translateX(0%)',
          zIndex: 1,
          backgroundColor: 'background.default',
        }}
      >
        {isLogin ? (
          <LoginForm handleToggle={handleToggle} />
        ) : (
          <RegisterForm handleToggle={handleToggle} />
        )}
      </Box>
    </Box>
  );
};

export default AuthPage;
