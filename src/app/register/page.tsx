'use client';

import React, { useState } from 'react';
import NotificationBar from '../../components/NotificationBar';
import AuthForm from '../../components/AuthForm';
import { register } from '@/api/accounts';

const RegisterPage = () => {
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleRegister = async (email: string, password: string) => {
    try {
      await register(email, password);
      setNotification({
        open: true,
        message: 'Registration successful!',
        severity: 'success',
      });
    } catch (err) {
      console.log(err)
      console.log(typeof err)
      setNotification({
        open: true,
        message: 'Registration failed!',
        severity: 'error',
      });
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
      <NotificationBar
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={() => setNotification((prev) => ({ ...prev, open: false }))}
      />
    </>
  );
};

export default RegisterPage;
