import { images } from '@constants/image';
import {
  faBell,
  faBoxArchive,
  faGear,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';
import type { ImageSourcePropType } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TopBarProps {
  avatarUrl?: string;
  notificationCount: number;
  screenName: string;
}

const TopBar = ({
  avatarUrl,
  notificationCount = 0,
  screenName,
}: TopBarProps) => {
  const avatarSource: ImageSourcePropType =
    avatarUrl && avatarUrl.trim() !== ''
      ? { uri: avatarUrl }
      : images.avatar_default;

  return (
    <SafeAreaView edges={['top']}>
      <View className="flex-row items-center justify-between px-4">
        <TouchableOpacity>
          <Image
            source={avatarSource}
            className="h-10 w-10 rounded-full"
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <TouchableOpacity
            onPress={() => router.push('/others/store')}
            className="flex-row items-center justify-center rounded-full bg-dark-500 px-3 py-2"
          >
            <FontAwesomeIcon icon={faGem} size={16} color="#B9FF66" />
            <Text className="ml-2 font-sans-medium text-white-50">
              Cửa hàng
            </Text>
          </TouchableOpacity>

          {(screenName === 'live' ||
            screenName === 'history' ||
            screenName === 'message') && (
            <Animated.View
              entering={FadeIn.duration(300)}
              exiting={FadeOut.duration(300)}
            >
              <TouchableOpacity onPress={() => router.push('/others/archive')}>
                <FontAwesomeIcon
                  icon={faBoxArchive}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            </Animated.View>
          )}

          {screenName === 'live' && (
            <Animated.View
              entering={FadeIn.duration(300)}
              exiting={FadeOut.duration(300)}
            >
              <TouchableOpacity
                onPress={() => router.push('/others/live-settings')}
              >
                <FontAwesomeIcon icon={faGear} size={18} color="#191A23" />
              </TouchableOpacity>
            </Animated.View>
          )}

          <TouchableOpacity
            onPress={() => router.push('/others/notification')}
            className="relative"
          >
            <FontAwesomeIcon icon={faBell} size={18} color="#191A23" />
            {notificationCount > 0 && (
              <View className="absolute -right-1 -top-2 h-4 w-4 items-center justify-center rounded-full bg-red-500">
                <Text className="text-white font-sans-semibold text-[8px]">
                  {notificationCount > 99 ? '99+' : notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
