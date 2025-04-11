import FollowMessageCard from '@components/message/FollowMessageCard';
import MessageCard from '@components/message/MessageCard';
import { router } from 'expo-router';
import { SafeAreaView, ScrollView, Text } from 'react-native';

export default function Message() {
  const avatarUrl =
    'https://res.cloudinary.com/dj8tkuzxz/image/upload/v1744003085/knibkshgqmr6f0pii1tf.jpg';
  const flagUrl = 'https://flagcdn.com/w20/ph.png'; // URL cờ Philippines

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="flex-1 px-6">
        {/* Tiêu đề */}
        <Text className="text-black mb-6 mt-4 font-sans-bold text-3xl">
          Message
        </Text>

        {/* Phần Theo dõi (Cuộn ngang) */}
        <Text className="text-black mb-3 font-sans-semibold text-lg">
          Follows
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            gap: 12, // Khoảng cách 12px giữa các card
          }}
        >
          <FollowMessageCard
            avatarUrl={avatarUrl}
            username="Clarzi"
            onPress={() => router.push('/others/chatting')}
          />
          <FollowMessageCard
            avatarUrl={avatarUrl}
            username="Clarzi"
            onPress={() => router.push('/others/chatting')}
          />
          {/* Thêm card để kiểm tra cuộn ngang */}
          <FollowMessageCard
            avatarUrl={avatarUrl}
            username="Clarzi"
            onPress={() => router.push('/others/chatting')}
          />
        </ScrollView>

        {/* Phần Tin nhắn (Vẫn cuộn dọc) */}
        <Text className="text-black mb-3 mt-6 font-sans-semibold text-lg">
          Messages
        </Text>
        <MessageCard
          avatarUrl={avatarUrl}
          username="Clarzi"
          location="San Antonio, Philippines"
          flag={flagUrl}
          time="15:57"
          onPress={() => router.push('/others/chatting')}
        />
        <MessageCard
          avatarUrl={avatarUrl}
          username="Clarzi"
          location="San Antonio, Philippines"
          flag={flagUrl}
          time="15:57"
          onPress={() => router.push('/others/chatting')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
