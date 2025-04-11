import {
  faBoxArchive,
  faChevronLeft,
  faEllipsisVertical,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router, Stack } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function OthersLayout() {
  const avatarUrl =
    'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg';

  return (
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
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
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
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
            </TouchableOpacity>
          ),
          headerTintColor: '#191A23',
          headerTitleStyle: {
            fontFamily: 'SpaceGrotesk-Bold',
            fontSize: 18,
          },
          headerRight: () => (
            <View className="mr-4 flex-row items-center justify-center gap-4">
              <View className="flex-row items-center justify-center">
                <FontAwesomeIcon icon={faGem} size={18} color="#FFAA00" />
                <Text className="ml-2 font-sans-medium text-base text-dark-500">
                  10
                </Text>
              </View>

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
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
            </TouchableOpacity>
          ),
          headerTintColor: '#191A23',
          headerTitleStyle: {
            fontFamily: 'SpaceGrotesk-Bold',
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
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
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
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
          title: 'Notifications',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
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
        name="chatting"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size={18} color="#191A23" />
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
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {}}>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                size={18}
                color="#191A23"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
