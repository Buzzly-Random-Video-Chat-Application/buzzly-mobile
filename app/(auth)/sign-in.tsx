import CustomButton from '@components/shared/CustomButton';
import InputForm from '@components/shared/InputForm';
import { Ionicons } from '@expo/vector-icons';
import { validateEmail, validatePassword } from '@utils/common';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleSignIn = () => {
    // const emailErrors = validateEmail(email);
    // const passwordErrors = validatePassword(password);

    // if (emailErrors.length === 0 && passwordErrors.length === 0) {
    //   console.log('Sign In with:', { email, password, rememberMe });
    // } else {
    //   console.log('Validation failed:', {
    //     emailErrors,
    //     passwordErrors,
    //   });
    //   setTouched({
    //     email: true,
    //     password: true,
    //   });
    // }
    router.push('/video-chat');
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="mt-6 flex-1 px-6">
        <Text className="font-sans-bold text-3xl text-dark-500">
          Welcome to <Text className="text-primary-600">Buzzly!</Text>
        </Text>
        <Text className="mt-2 font-sans-semibold text-lg text-dark-500">
          Login
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
          label="Password"
          placeholder="Enter your Password"
          value={password}
          setValue={setPassword}
          required
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

        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center gap-1">
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              <Ionicons
                name={rememberMe ? 'checkbox' : 'square-outline'}
                size={20}
                color="#9DA0A9"
                className="mr-2"
              />
            </TouchableOpacity>
            <Text className="font-sans-medium text-gray-500">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="font-sans-semibold text-primary-600">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          category="secondary"
          shape="square"
          size="medium"
          onPress={handleSignIn}
          disabled={false}
          style={{ marginTop: 24 }}
          full={false}
        >
          Login
        </CustomButton>

        <View className="mt-4 flex-row justify-center">
          <Text className="font-sans-regular text-gray-200">
            {`Don't have an account?`}{' '}
          </Text>
          <TouchableOpacity onPress={() => router.push('/sign-up')}>
            <Text className="font-sans-semibold text-primary-600">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
