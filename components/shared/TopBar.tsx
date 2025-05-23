import ProfileContent from '@components/others/ProfileContent';
import { images } from '@constants/image';
import {
  faBell,
  faBoxArchive,
  faGear,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type BottomSheet from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheetModal from './BottomSheetModal';

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

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBottomSheet = () => {
    setIsModalOpen(true);
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    setIsModalOpen(false);
    bottomSheetRef.current?.close();
  };

  return (
    <View className="absolute inset-x-0 top-0 z-10">
      <SafeAreaView edges={['top']} style={{ backgroundColor: 'transparent' }}>
        <View className="flex-row items-center justify-between px-4">
          <TouchableOpacity onPress={openBottomSheet}>
            <Image
              source={avatarSource}
              className="size-10 rounded-full"
              resizeMode="cover"
            />
          </TouchableOpacity>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity
              onPress={() => router.push('/others/store')}
              className="flex-row items-center justify-center rounded-full bg-dark-500 px-3 py-2"
            >
              <FontAwesomeIcon icon={faGem} size={18} color="#B9FF66" />
              <Text className="ml-2 font-sans-medium text-white-50">Store</Text>
            </TouchableOpacity>

            {(screenName === 'live' ||
              screenName === 'history' ||
              screenName === 'message') && (
              <Animated.View
                entering={FadeIn.duration(300)}
                exiting={FadeOut.duration(300)}
              >
                <TouchableOpacity
                  onPress={() => router.push('/others/archive')}
                >
                  <FontAwesomeIcon
                    icon={faBoxArchive}
                    size={24}
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
                  <FontAwesomeIcon icon={faGear} size={24} color="#191A23" />
                </TouchableOpacity>
              </Animated.View>
            )}

            <TouchableOpacity
              onPress={() => router.push('/others/notification')}
              className="relative"
            >
              <FontAwesomeIcon icon={faBell} size={24} color="#191A23" />
              {notificationCount > 0 && (
                <View className="absolute -right-1 -top-2 size-4 items-center justify-center rounded-full bg-red-500">
                  <Text className="font-sans-semibold text-[10px] text-white-50">
                    {notificationCount > 99 ? '99+' : notificationCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {isModalOpen && (
          <BottomSheetModal
            ref={bottomSheetRef}
            onClose={closeBottomSheet}
            height="85%"
          >
            <ProfileContent onClose={closeBottomSheet} />
          </BottomSheetModal>
        )}
      </SafeAreaView>
    </View>
  );
};

export default TopBar;
