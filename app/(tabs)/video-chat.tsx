import TopBar from '@components/shared/TopBar';
import FilterButtonGroup from '@components/video-chat/FilterButtonGroup';
import Sidebar from '@components/video-chat/SideBar';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function VideoChat() {
  const [openCamera, setOpenCamera] = useState(false);

  const handleCameraToggle = (isOpen: boolean) => {
    setOpenCamera(isOpen);
  };

  return (
    <View className="flex-1">
      {/* Video from user device camera */}
      {openCamera ? (
        <Camera style={{ flex: 1 }} type={CameraType.front} ratio="16:9" />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="font-sans-bold text-2xl">Video Chat Page</Text>
        </View>
      )}

      <TopBar notificationCount={5} screenName="video-chat" />
      <Sidebar onCameraToggle={handleCameraToggle} />
      <FilterButtonGroup />
    </View>
  );
}
