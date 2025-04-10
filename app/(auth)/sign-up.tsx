import CustomButton from '@components/shared/CustomButton';
import InputForm from '@components/shared/InputForm';
import { Ionicons } from '@expo/vector-icons';
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from '@utils/common';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleSignUp = () => {
    // const emailErrors = validateEmail(email);
    // const usernameErrors = validateUsername(username);
    // const passwordErrors = validatePassword(password);
    // const confirmPasswordErrors = validateConfirmPassword(
    //   confirmPassword,
    //   password,
    // );

    // if (
    //   emailErrors.length === 0 &&
    //   usernameErrors.length === 0 &&
    //   passwordErrors.length === 0 &&
    //   confirmPasswordErrors.length === 0
    // ) {
    //   console.log('Sign Up with:', {
    //     email,
    //     username,
    //     password,
    //     confirmPassword,
    //   });
    // } else {
    //   console.log('Validation failed:', {
    //     emailErrors,
    //     usernameErrors,
    //     passwordErrors,
    //     confirmPasswordErrors,
    //   });
    //   setTouched({
    //     email: true,
    //     username: true,
    //     password: true,
    //     confirmPassword: true,
    //   });
    // }

    router.push('/sign-in');
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="mt-6 flex-1 px-6">
        <Text className="font-sans-bold text-3xl text-dark-500">
          Welcome to <Text className="text-primary-600">Buzzly!</Text>
        </Text>
        <Text className="mt-2 font-sans-semibold text-lg text-dark-500">
          Register
        </Text>

        <InputForm
          label="Email"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          required
          keyboardType="email-address"
          autoCapitalize="none"
          errors={touched.email ? validateEmail(email) : []}
          onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
        />

        <InputForm
          label="Username"
          placeholder="Enter your username"
          value={username}
          setValue={setUsername}
          required
          keyboardType="default"
          autoCapitalize="none"
          errors={touched.username ? validateUsername(username) : []}
          onFocus={() => setTouched((prev) => ({ ...prev, username: true }))}
        />

        <InputForm
          label="Password"
          placeholder="Enter your Password"
          value={password}
          setValue={setPassword}
          required
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          rightIcon={
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="#9DA0A9"
            />
          }
          onRightIconPress={() => setShowPassword(!showPassword)}
          errors={touched.password ? validatePassword(password) : []}
          onFocus={() => setTouched((prev) => ({ ...prev, password: true }))}
        />

        <InputForm
          label="Confirm Password"
          placeholder="Enter confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          required
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={!showConfirmPassword}
          rightIcon={
            <Ionicons
              name={showConfirmPassword ? 'eye-off' : 'eye'}
              size={20}
              color="#9DA0A9"
            />
          }
          onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
          errors={
            touched.confirmPassword
              ? validateConfirmPassword(confirmPassword, password)
              : []
          }
          onFocus={() =>
            setTouched((prev) => ({ ...prev, confirmPassword: true }))
          }
        />

        <CustomButton
          category="secondary"
          shape="square"
          size="medium"
          onPress={handleSignUp}
          disabled={false}
          style={{ marginTop: 24 }}
          full
        >
          Register
        </CustomButton>

        <View className="mt-4 flex-row justify-center">
          <Text className="font-sans-regular text-gray-200">
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => router.push('/sign-in')}>
            <Text className="font-sans-semibold text-primary-600">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
