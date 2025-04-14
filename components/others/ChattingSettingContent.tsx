import { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

export const ChattingSettingContent = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] =
    useState<boolean>(false);
  const [isFavoriteEnabled, setIsFavoriteEnabled] = useState<boolean>(false);
  const [isTranslationEnabled, setIsTranslationEnabled] =
    useState<boolean>(true);

  return (
    <View className="flex-1 justify-between rounded-[24px] bg-white-50 px-4 py-2">
      <View className="flex-column mt-4 items-start justify-center">
        <Text className="mb-4 font-sans-bold text-lg text-dark-500">
          Settings
        </Text>

        <View className="mb-2 w-full flex-row items-center justify-between">
          <Text className="font-sans-regular text-base text-dark-500">
            Message Notifications
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isNotificationEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setIsNotificationEnabled(!isNotificationEnabled)
            }
            value={isNotificationEnabled}
            className="h-5 w-9 rounded-full"
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
            }}
          />
        </View>
        <View className="mb-2 w-full flex-row items-center justify-between">
          <Text className="font-sans-regular text-base text-dark-500">
            Favorites List
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isFavoriteEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsFavoriteEnabled(!isFavoriteEnabled)}
            value={isFavoriteEnabled}
            className="h-5 w-9 rounded-full"
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
            }}
          />
        </View>
        <View className="mb-2 w-full flex-row items-center justify-between">
          <Text className="font-sans-regular text-base text-dark-500">
            Translate
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isTranslationEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsTranslationEnabled(!isTranslationEnabled)}
            value={isTranslationEnabled}
            className="h-5 w-9 rounded-full"
            style={{
              transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
            }}
          />
        </View>
      </View>
      <View className="flex-column mb-10 items-start justify-center">
        <TouchableOpacity className="mb-2 w-full">
          <Text className="font-sans-regular text-base text-dark-500">
            Report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-2 w-full">
          <Text className="font-sans-regular text-base text-dark-500">
            Block and Leave
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full">
          <Text className="font-sans-regular text-base text-dark-500">
            Leave
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
