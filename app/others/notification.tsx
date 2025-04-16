import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Notification() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-2 px-4 py-2"
      >
        <TouchableOpacity className="flex-row items-center justify-between rounded-full bg-dark-500 px-6 py-1">
          <Text className="font-sans-bold text-lg text-white-50">All</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between rounded-full bg-dark-500 px-6 py-1">
          <Text className="font-sans-bold text-lg text-white-50">
            Anoucements
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between rounded-full bg-dark-500 px-6 py-1">
          <Text className="font-sans-bold text-lg text-white-50">
            Events & Promotions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between rounded-full bg-dark-500 px-6 py-1">
          <Text className="font-sans-bold text-lg text-white-50">Updates</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
