import CustomButton from '@components/shared/CustomButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function BuzzlyId() {
  const [id, setId] = useState('nquynqthanq');

  const handleChangeId = () => {
    router.back();
  };

  const clearId = () => {
    setId('');
  };

  return (
    <View className="flex-1 bg-white-50 p-4">
      {/* Info */}
      <View className="my-2">
        <Text className="text-center font-sans text-sm text-gray-500">
          Note that inappropriate IDs will be rejected. Be careful in choosing
          your ID.
        </Text>
      </View>

      {/* id Input */}
      <Text className="mb-2 text-right font-sans text-xs text-[#A8A8A8]">
        {id.length}/20
      </Text>
      <View className="flex-row items-center rounded-md bg-light-300 px-2 py-3">
        <TextInput
          className="flex-1 font-sans text-sm text-dark-500"
          value={id}
          onChangeText={setId}
          maxLength={20}
          placeholder="Enter your id"
          placeholderTextColor="#A8A8A8"
          returnKeyType="done"
        />
        {id.length > 0 && (
          <TouchableOpacity onPress={clearId} className="ml-2">
            <FontAwesomeIcon icon={faTimes} size={16} color="#A8A8A8" />
          </TouchableOpacity>
        )}
      </View>

      {/* Change id Button */}
      <CustomButton
        category="primary"
        shape="pill"
        size="medium"
        onPress={handleChangeId}
        disabled={id.length === 0}
        full={false}
        style={{ marginTop: 16 }}
      >
        Save
      </CustomButton>
    </View>
  );
}
