import CustomButton from '@components/shared/CustomButton';
import TopBar from '@components/shared/TopBar';
import { icons } from '@constants/icon';
import { router } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function History() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="flex-1 px-4 py-10">
        <Text className="text-black mb-6 mt-4 font-sans-bold text-3xl">
          History
        </Text>
        <View className="mt-10 flex-1 items-center justify-center">
          <icons.history
            className="h-20 w-20 text-dark-500"
            width={300}
            height={300}
          />
          <Text className="text-center font-sans text-sm text-dark-500">
            No friends yet! Would you like to meet a new friend!
          </Text>
          <View className="flex-column w-[70%] items-center justify-between">
            <CustomButton
              category="primary"
              shape="pill"
              size="small"
              onPress={() => router.push('/video-chat')}
              disabled={false}
              style={{ marginTop: 24 }}
              full
            >
              {/* TODO: NAVIGATE TO VIDEO CHAT */}
              {`Let's engage with users`}
            </CustomButton>
            <CustomButton
              category="default"
              shape="pill"
              size="small"
              onPress={() => router.push('/live')}
              disabled={false}
              style={{ marginTop: 12 }}
              full
            >
              {/* TODO: NAVIGATE TO LIVE */}
              Watch live now!
            </CustomButton>
          </View>
        </View>
      </ScrollView>
      <TopBar notificationCount={5} screenName="video-chat" />
    </SafeAreaView>
  );
}
