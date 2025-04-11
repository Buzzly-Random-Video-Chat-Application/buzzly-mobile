import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface MessageCardProps {
  avatarUrl: string;
  username: string;
  location: string;
  flag: string; // URL của cờ quốc gia
  time: string;
  onPress?: () => void;
}

const MessageCard = ({
  avatarUrl,
  username,
  location,
  flag,
  time,
  onPress,
}: MessageCardProps) => {
  return (
    <TouchableOpacity
      className="bg-white flex-row items-center border-b border-gray-200 py-3"
      onPress={onPress}
    >
      {/* Avatar với viền xanh */}
      <View className="relative">
        <Image
          source={{ uri: avatarUrl }}
          className="h-12 w-12 rounded-full"
          resizeMode="cover"
        />
        <FontAwesomeIcon
          icon={faCircle}
          size={12}
          color="#FFAA00"
          style={{ position: 'absolute', bottom: 0, right: 0 }}
        />
      </View>

      {/* Thông tin */}
      <View className="ml-3 flex-1">
        <Text className="text-black font-sans-semibold text-base">
          {username}
        </Text>
        <View className="flex-row items-center">
          <Image
            source={{ uri: flag }}
            className="mr-1 h-3 w-5"
            resizeMode="contain"
          />
          <Text className="font-sans-medium text-sm text-gray-500">
            {location}
          </Text>
        </View>
      </View>

      {/* Thời gian */}
      <Text className="font-sans-medium text-sm text-gray-500">{time}</Text>
    </TouchableOpacity>
  );
};

export default MessageCard;
