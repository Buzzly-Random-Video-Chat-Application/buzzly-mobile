import TopBar from '@components/shared/TopBar';
import FilterButtonGroup from '@components/video-chat/FilterButtonGroup';
import Sidebar from '@components/video-chat/SideBar';
import { Text, View } from 'react-native';

export default function VideoChat() {
  return (
    <View className="flex-1">
      {/* Nội dung chính với padding bên trái */}
      <View className="flex-1 items-center justify-center">
        <Text className="font-sans-bold text-2xl">Video Chat Page</Text>
      </View>

      {/* TopBar */}
      <TopBar notificationCount={5} screenName="video-chat" />
      <Sidebar />
      <FilterButtonGroup />
    </View>
  );
}
