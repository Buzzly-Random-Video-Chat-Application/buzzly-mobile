// constants/endpoints.ts
import { Platform } from 'react-native';
import Config from 'react-native-config';

const getBaseUrl = () => {
  if (Config.API_BASE_URL) {
    console.log('API_BASE_URL from .env:', Config.API_BASE_URL); // Debug
    return Config.API_BASE_URL;
  }
  console.warn('API_BASE_URL not found in .env, using fallback'); // Debug
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000/v1'; // Android emulator
  }
  if (Platform.OS === 'ios') {
    return 'http://localhost:3000/v1'; // iOS simulator
  }
  return 'http://192.168.1.x:3000/v1'; // Replace with your machine's IP for physical devices
};

export const API_BASE_URL = getBaseUrl();
export const AUTH_ENDPOINT = `${API_BASE_URL}/auth`;
