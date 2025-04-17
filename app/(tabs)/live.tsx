import TopBar from '@components/shared/TopBar';
import { Text, View } from 'react-native';

export default function Live() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-sans-bold text-2xl">Welcome to Live Page</Text>
      <TopBar notificationCount={5} screenName="video-chat" />
    </View>
  );
}
