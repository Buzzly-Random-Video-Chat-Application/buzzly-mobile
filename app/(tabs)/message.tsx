import FollowMessageCard from '@components/message/FollowMessageCard';
import MessageCard from '@components/message/MessageCard';
import CustomButton from '@components/shared/CustomButton';
import { messages } from '@constants/app';
import { router } from 'expo-router';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function Message() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="flex-1 px-4">
        <Text className="text-black mb-6 mt-4 font-sans-bold text-3xl">
          Message
        </Text>
        <Text className="text-black mb-3 font-sans-semibold text-lg">
          Follows
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            width: '100%',
            gap: 12,
          }}
        >
          {messages.length > 0 ? (
            messages.map((message) => (
              <FollowMessageCard
                key={`${message.avatarUrl ?? ''}${message.username ?? ''}`}
                avatarUrl={message.avatarUrl ?? ''}
                username={message.username ?? ''}
                onPress={() => router.push('/others/chatting')}
              />
            ))
          ) : (
            <View className="h-32 w-full items-center justify-center rounded-md bg-black-50">
              <Text className="font-sans-regular text-xs text-dark-500">
                Let try to follow more people to get more messages
              </Text>
            </View>
          )}
        </ScrollView>
        <Text className="text-black mb-3 mt-6 font-sans-semibold text-lg">
          Messages
        </Text>
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <MessageCard
              key={`${message.avatarUrl ?? ''}${message.username ?? ''}`}
              avatarUrl={message.avatarUrl ?? ''}
              username={message.username ?? ''}
              location={message.location ?? ''}
              flag={message.flag ?? ''}
              time={message.time ?? ''}
              onPress={() => router.push('/others/chatting')}
            />
          ))
        ) : (
          <View className="h-32 w-full items-center justify-center">
            <Text>More friends want to date you. Meet them!</Text>
            <CustomButton
              category="primary"
              shape="pill"
              size="small"
              onPress={() => {}}
              disabled={false}
              style={{ marginTop: 24 }}
              full={false}
            >
              {`Let's engage with users`}
            </CustomButton>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
