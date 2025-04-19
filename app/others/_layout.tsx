import { AboutMeContent } from '@components/others/AboutMeContent';
import { ChattingSettingContent } from '@components/others/ChattingSettingContent';
import BottomSheetModal from '@components/shared/BottomSheetModal';
import {
  faBoxArchive,
  faChevronLeft,
  faEllipsisVertical,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type BottomSheet from '@gorhom/bottom-sheet';
import { router, Stack } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function OthersLayout() {
  const avatarUrl =
    'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg';

  const chattingSettingsRef = useRef<BottomSheet>(null);
  const [isChattingSettingsModalOpen, setIsChattingSettingsModalOpen] =
    useState(false);

  const aboutMeRef = useRef<BottomSheet>(null);
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  const openChattingSettingsBottomSheet = () => {
    setIsChattingSettingsModalOpen(true);
    chattingSettingsRef.current?.expand();
  };

  const closeChattingSettingsBottomSheet = () => {
    setIsChattingSettingsModalOpen(false);
    chattingSettingsRef.current?.close();
  };

  const openAboutMeBottomSheet = () => {
    setIsAboutMeModalOpen(true);
    aboutMeRef.current?.expand();
  };
  const closeAboutMeBottomSheet = () => {
    setIsAboutMeModalOpen(false);
    aboutMeRef.current?.close();
  };

  return (
    <>
      <Stack>
        <Stack.Screen
          name="settings"
          options={{
            headerShown: true,
            title: 'Settings',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="store"
          options={{
            headerShown: true,
            title: 'Store',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
            headerRight: () => (
              <View className="mr-4 flex-row items-center justify-center gap-4">
                <TouchableOpacity
                  className="flex-row items-center justify-center"
                  onPress={() => router.push('/others/wallet')}
                >
                  <FontAwesomeIcon icon={faGem} size={18} color="#FFAA00" />
                  <Text className="ml-2 font-sans-medium text-base text-dark-500">
                    10
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.push('/others/archive')}
                  className="items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faBoxArchive}
                    size={18}
                    color="#191A23"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="live-settings"
          options={{
            headerShown: true,
            title: 'Live Settings',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={openAboutMeBottomSheet}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="archive"
          options={{
            headerShown: true,
            title: 'Archive',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="notification"
          options={{
            headerShown: true,
            title: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="chatting"
          options={{
            headerShown: true,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <View className="flex-row items-center">
                <Image
                  source={{ uri: avatarUrl }}
                  className="mr-2 h-8 w-8 rounded-full"
                  resizeMode="cover"
                />
                <Text className="font-sans-bold text-lg text-dark-500">
                  Clarzi
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={openChattingSettingsBottomSheet}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="wallet"
          options={{
            headerShown: true,
            title: 'Wallet',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="edit-profile"
          options={{
            headerShown: true,
            title: 'Edit Profile',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="edit-nickname"
          options={{
            headerShown: true,
            title: 'Edit Nickname',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="buzzly-id"
          options={{
            headerShown: true,
            title: 'Buzzly ID',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ marginLeft: 10 }}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size={18}
                  color="#191A23"
                />
              </TouchableOpacity>
            ),
            headerTintColor: '#191A23',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk-Bold',
              fontSize: 18,
            },
          }}
        />
      </Stack>

      {isChattingSettingsModalOpen && (
        <BottomSheetModal
          ref={chattingSettingsRef}
          onClose={closeChattingSettingsBottomSheet}
          height="50%"
        >
          <ChattingSettingContent />
        </BottomSheetModal>
      )}

      {isAboutMeModalOpen && (
        <BottomSheetModal
          ref={chattingSettingsRef}
          onClose={closeAboutMeBottomSheet}
          height="30%"
        >
          <AboutMeContent />
        </BottomSheetModal>
      )}
    </>
  );
}
