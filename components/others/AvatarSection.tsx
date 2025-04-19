import { icons } from '@constants/icon';
import { images } from '@constants/image';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, Platform, TouchableOpacity, View } from 'react-native';

export default function AvatarSection() {
  const [avatars, setAvatars] = useState<string[]>([]);

  const requestPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Error',
          'The app needs permission to access your photo library to select photos. Please grant permission in settings.',
        );
        return false;
      }
    }
    return true;
  };

  const handleAddAvatar = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.canceled && result.assets?.[0]?.uri && avatars.length < 3) {
        setAvatars([...avatars, result.assets[0].uri]);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to select photo. Please try again.');
    }
  };

  const handleEditAvatar = async (index: number) => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.canceled && result.assets?.[0]?.uri) {
        const newAvatars = [...avatars];
        newAvatars[index] = result.assets[0].uri;
        setAvatars(newAvatars);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to select image. Please try again.');
    }
  };

  const handleDeleteAvatar = (index: number) => {
    Alert.alert('Delete photo', 'Are you sure you want to delete this photo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const newAvatars = avatars.filter((_, i) => i !== index);
          setAvatars(newAvatars);
        },
      },
    ]);
  };

  return (
    <View className="flex-row items-center justify-between gap-2">
      <View className="relative flex-1">
        <Image
          source={
            avatars[0] ? { uri: avatars[0] } : images.avatar_default_porttrait
          }
          className="h-48 w-full rounded-lg bg-white-50"
          style={{ resizeMode: avatars[0] ? 'cover' : 'contain' }}
          alt="Avatar 1"
        />
        <TouchableOpacity
          className="absolute bottom-2 right-2 rounded-full bg-white-50 p-2 shadow"
          onPress={() =>
            avatars[0] ? handleDeleteAvatar(0) : handleEditAvatar(0)
          }
        >
          <FontAwesomeIcon
            icon={avatars[0] ? faTrash : faPen}
            size={12}
            color="#030303"
          />
        </TouchableOpacity>
      </View>
      <View className="relative flex-1">
        <Image
          source={
            avatars[1] ? { uri: avatars[1] } : images.avatar_default_porttrait
          }
          className="h-48 w-full rounded-lg bg-white-50"
          style={{ resizeMode: avatars[1] ? 'cover' : 'contain' }}
          alt="Avatar 2"
        />
        <TouchableOpacity
          className="absolute bottom-2 right-2 rounded-full bg-white-50 p-2 shadow"
          onPress={() =>
            avatars[1] ? handleDeleteAvatar(1) : handleEditAvatar(1)
          }
        >
          <FontAwesomeIcon
            icon={avatars[1] ? faTrash : faPen}
            size={12}
            color="#030303"
          />
        </TouchableOpacity>
      </View>
      {avatars.length < 3 ? (
        <TouchableOpacity
          className="h-48 flex-1 flex-row items-center justify-center rounded-lg bg-light-300"
          onPress={handleAddAvatar}
        >
          <icons.add width={32} height={32} />
        </TouchableOpacity>
      ) : (
        <View className="relative flex-1">
          <Image
            source={
              avatars[2] ? { uri: avatars[2] } : images.avatar_default_porttrait
            }
            className="h-48 w-full rounded-lg bg-white-50"
            style={{ resizeMode: avatars[2] ? 'cover' : 'contain' }}
            alt="Avatar 3"
          />
          <TouchableOpacity
            className="absolute bottom-2 right-2 rounded-full bg-white-50 p-2 shadow"
            onPress={() => handleDeleteAvatar(2)}
          >
            <FontAwesomeIcon icon={faTrash} size={12} color="#030303" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
