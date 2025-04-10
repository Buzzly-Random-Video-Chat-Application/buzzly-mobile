import CustomButton from '@components/shared/CustomButton';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function LiveSettings() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-sans-bold text-2xl">
        Welcome to Live Settings Page
      </Text>

      <CustomButton
        category="primary"
        shape="round"
        size="medium"
        onPress={() => router.back()}
        disabled={false}
        style={{ marginTop: 12 }}
        full={false}
      >
        Go back Home
      </CustomButton>
    </View>
  );
}
