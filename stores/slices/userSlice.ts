/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import type { User } from 'user';

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  mode: string | null;
}

// Async function to get initial state
const getInitialState = async (): Promise<UserState> => {
  const accessToken = await AsyncStorage.getItem('accessToken');
  const userString = await AsyncStorage.getItem('user');
  const user: User | null = userString
    ? (JSON.parse(userString) as User)
    : null;
  const storedMode = await AsyncStorage.getItem('mode');
  const systemMode = Appearance.getColorScheme();
  const initialMode = storedMode || systemMode || 'light';

  return {
    isAuthenticated: !!accessToken,
    user: user || null,
    mode: initialMode,
  };
};

// Default initial state (will be overridden by async initialization)
const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  mode: 'light',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        AsyncStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        AsyncStorage.setItem('mode', 'light');
      }
    },
    updateSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { loginSuccess, logoutSuccess, changeMode, updateSuccess } =
  userSlice.actions;
export default userSlice.reducer;

// Export async initializer for store setup
export { getInitialState };
