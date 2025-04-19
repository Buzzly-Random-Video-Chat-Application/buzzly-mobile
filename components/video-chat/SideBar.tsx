import { icons } from '@constants/icon';
import {
  faArchive,
  faCamera,
  faRotate,
  faSprayCanSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Camera } from 'expo-camera';
import { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';

interface SidebarProps {
  onCameraToggle: (isOpen: boolean) => void;
}

const Sidebar = ({ onCameraToggle }: SidebarProps) => {
  const [openCamera, setOpenCamera] = useState(false);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setOpenCamera(true);
      onCameraToggle(true);
    } else {
      Alert.alert(
        'Camera Permission Denied',
        'You need to enable camera access in your device settings to use this feature.',
      );
      setOpenCamera(false);
      onCameraToggle(false);
    }
  };

  const handleCameraToggle = () => {
    if (!openCamera) {
      requestCameraPermission();
    } else {
      setOpenCamera(false);
      onCameraToggle(false);
    }
  };

  return (
    <View className="absolute left-4 top-[40%] z-10 rounded-full bg-dark-500 px-3 py-4">
      <View className="flex h-full items-center justify-between gap-4">
        <TouchableOpacity onPress={handleCameraToggle}>
          {openCamera ? (
            <FontAwesomeIcon icon={faCamera} size={20} color="white" />
          ) : (
            <icons.splashCamera width={20} height={20} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faRotate} size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSprayCanSparkles} size={20} color="white" />
        </TouchableOpacity>
        <View className="h-px w-full bg-white-50" />
        <TouchableOpacity>
          <FontAwesomeIcon icon={faArchive} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;
