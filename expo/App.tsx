import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppModelProvider } from '@skeleton-xn/app-model-context';
import { FormStateExpo } from './form-state-expo';

export default function App() {
  return (
    <AppModelProvider>
      <FormStateExpo />
    </AppModelProvider>
  );
}

