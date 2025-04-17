import TopBar from '@components/shared/TopBar';
import { Text, View } from 'react-native';

export default function Live() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-sans-bold text-2xl">Welcome to Live Page</Text>
      <View className="absolute inset-x-0 top-0 z-10">
        <TopBar notificationCount={5} screenName="video-chat" />
      </View>
    </View>
  );
}
