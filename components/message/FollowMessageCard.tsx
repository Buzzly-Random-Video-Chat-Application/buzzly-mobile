import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface FollowMessageCardProps {
  avatarUrl: string;
  username: string;
  onPress?: () => void;
}

const FollowMessageCard = ({
  avatarUrl,
  username,
  onPress,
}: FollowMessageCardProps) => {
  return (
    <View className="mb-2 flex-col items-center self-start rounded-lg bg-dark-50 px-2 py-3">
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

      <View className="mt-2 flex-col items-center">
        <Text className="font-sans-semibold text-base text-dark-500">
          {username}
        </Text>
        <TouchableOpacity
          className="flex-row items-center rounded-full bg-gray-100 px-3 py-1"
          onPress={onPress}
        >
          <Text className="font-sans-medium text-xs">Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FollowMessageCard;
