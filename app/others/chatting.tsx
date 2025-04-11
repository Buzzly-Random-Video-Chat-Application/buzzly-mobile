import { faImages, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Chatting() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white-50">
      <ScrollView className="flex-1 px-4">
        {/* Hiện tại trống, có thể thêm FlatList để hiển thị tin nhắn */}
      </ScrollView>

      {/* Thanh nhập tin nhắn */}
      <View className="flex-row items-center bg-white-50 px-4 py-3">
        <TouchableOpacity onPress={handleSend}>
          <FontAwesomeIcon icon={faImages} size={24} color="#191A23" />
        </TouchableOpacity>
        <TextInput
          className="mx-4 flex-1 rounded-full bg-white-600 px-4 py-2 text-base text-dark-500"
          style={{ textAlignVertical: 'center', lineHeight: 20 }}
          placeholder="Enter your message"
          placeholderTextColor="#A1A1AA"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSend}>
          <FontAwesomeIcon icon={faVideo} size={24} color="#191A23" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
