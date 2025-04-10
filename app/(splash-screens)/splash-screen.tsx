import CustomButton from '@components/shared/CustomButton';
import { icons } from '@constants/icon';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

interface ScreenContent {
  title: string;
  description: string;
  icon: React.FC<SvgProps>;
}

export default function SplashScreen() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const screenContent: Record<number, ScreenContent> = {
    1: {
      title: 'Connect with Strangers',
      description:
        'Start a random video chat with people from around the world and make new friends!',
      icon: icons.videochat,
    },
    2: {
      title: 'Chat While You Talk',
      description:
        'Send messages during your conversations to share thoughts and keep the chat flowing!',
      icon: icons.chatting,
    },
    3: {
      title: 'Go Live, Share Your Passion',
      description:
        'Livestream your moments and connect with a global audience who shares your interests!',
      icon: icons.lives,
    },
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    } else {
      router.push('/sign-in');
    }
  };

  const handleSkip = () => {
    router.push('/sign-in');
  };

  const handleRegister = () => {
    router.push('/sign-up');
  };

  const handleDotPress = (screen: number) => {
    setCurrentScreen(screen);
  };

  const Icon = screenContent[currentScreen]?.icon;

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 px-6">
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handleBack} disabled={currentScreen === 1}>
            <Text
              className={`font-sans-semibold ${
                currentScreen === 1 ? 'text-gray-200' : 'text-primary-600'
              }`}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSkip} disabled={currentScreen === 3}>
            <Text
              className={`font-sans-semibold ${
                currentScreen === 3 ? 'text-gray-200' : 'text-primary-600'
              }`}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-center">
          {Icon && (
            <View style={{ marginBottom: 16 }}>
              <Icon width={300} height={300} fill="#FFD700" />
            </View>
          )}

          <View className="mb-6 flex-row">
            {[1, 2, 3].map((screen) => (
              <TouchableOpacity
                key={screen}
                onPress={() => handleDotPress(screen)}
                className={`mx-1 h-1 w-5 rounded-sm ${
                  currentScreen === screen ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </View>

          <Text className="text-center font-sans-bold text-2xl text-dark-500">
            {screenContent[currentScreen]?.title}
          </Text>
          <Text className="font-sans-regular mt-4 px-4 text-center text-gray-500">
            {screenContent[currentScreen]?.description}
          </Text>
        </View>

        <View style={{ height: 120, justifyContent: 'flex-end' }}>
          <CustomButton
            category="primary"
            shape="round"
            size="medium"
            onPress={handleNext}
            disabled={false}
            style={{ marginTop: 12 }}
            full={false}
          >
            {currentScreen === 3 ? 'Login' : 'Next'}
          </CustomButton>

          {currentScreen === 3 && (
            <CustomButton
              category="default"
              shape="round"
              size="medium"
              onPress={handleRegister}
              disabled={false}
              style={{ marginTop: 12 }}
              full={false}
            >
              Register
            </CustomButton>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
