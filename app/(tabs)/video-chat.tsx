import TopBar from '@components/shared/TopBar';
import FilterButtonGroup from '@components/video-chat/FilterButtonGroup';
import Sidebar from '@components/video-chat/SideBar';
import {
  CameraView,
  useCameraPermissions,
  useMicrophonePermissions,
} from 'expo-camera';
import { useEffect, useState } from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function VideoChat() {
  const [openCamera, setOpenCamera] = useState(false);
  const [facing, setFacing] = useState<'front' | 'back'>('front');
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const [permissionsReady, setPermissionsReady] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      if (!cameraPermission || !micPermission) {
        const camResult = await requestCameraPermission();
        const micResult = await requestMicPermission();
        setPermissionsReady(camResult.granted && micResult.granted);
      } else {
        setPermissionsReady(cameraPermission.granted && micPermission.granted);
      }
    })();
  }, [
    cameraPermission,
    micPermission,
    requestCameraPermission,
    requestMicPermission,
  ]);

  const handleCameraToggle = (isOpen: boolean) => {
    setOpenCamera(isOpen);
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'front' ? 'back' : 'front'));
  };

  if (permissionsReady === null) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="font-sans-bold text-lg">Checking permissions.</Text>
      </View>
    );
  }

  if (permissionsReady === false) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="font-sans-bold text-lg">
          Camera or microphone access denied
        </Text>
        <Button
          title="Grant Permissions"
          onPress={async () => {
            await requestCameraPermission();
            await requestMicPermission();
          }}
        />
      </View>
    );
  }

  return (
    <View className="flex-1">
      {openCamera ? (
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          ratio="16:9"
          enableTorch={false}
        />
      ) : (
        <ImageBackground
          source={{
            uri: 'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
          }}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            ]}
          />
          <View className="flex-1 items-center justify-center">
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg',
              }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
              }}
            />
          </View>
        </ImageBackground>
      )}

      {openCamera && (
        <View className="absolute inset-x-0 bottom-10 items-center">
          <Button title="Flip Camera" onPress={toggleCameraFacing} />
        </View>
      )}

      <TopBar notificationCount={5} screenName="video-chat" />
      <Sidebar
        onCameraToggle={handleCameraToggle}
        onToggleCameraFacing={toggleCameraFacing}
      />
      <FilterButtonGroup />
    </View>
  );
}
