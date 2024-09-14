// wealth-wise-frontend/src/components/Authentication/RegisterForm.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Typography,
  Alert,
  Box,
  Link,
  Container,
  Avatar,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CustomButton from '../Common/CustomButton';

const RegisterForm = ({ handleToggle }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            {...register('firstName', { required: 'First Name is required' })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            autoComplete="given-name"
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            {...register('lastName', { required: 'Last Name is required' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            autoComplete="family-name"
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            autoComplete="email"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="new-password"
          />
          <CustomButton type="submit" fullWidth>
            Sign Up
          </CustomButton>
          <Link
            href="#"
            variant="body2"
            onClick={handleToggle}
            sx={{
              display: 'block',
              textAlign: 'center',
              mt: 2,
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {'Already have an account? Sign in'}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
