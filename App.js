import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/pages/routes';
import {QueryClientProvider,QueryClient } from 'react-query';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    

    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </QueryClientProvider>
  );
}


