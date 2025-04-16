import type React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  onPress: () => void;
}

export default function BenefitItem({
  icon,
  title,
  description,
  duration,
  onPress,
}: BenefitItemProps) {
  return (
    <View className="flex-row items-center justify-between">
      {icon}
      <View className="flex-column mx-2 flex-1 items-start justify-center">
        <Text className="font-sans-bold text-sm text-white-50">{title}</Text>
        <Text className="font-sans-regular text-xs text-white-50">
          {description}
        </Text>
      </View>
      <View className="flex-column items-center justify-center">
        <TouchableOpacity
          className="flex-row items-center justify-center rounded-full bg-primary-600 px-3 py-1"
          onPress={onPress}
          style={{
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
        >
          <Text className="font-sans-semibold text-xs text-white-50">
            Purchase
          </Text>
        </TouchableOpacity>
        <Text className="font-sans-regular mt-1 text-xs text-gray-300">
          {duration}
        </Text>
      </View>
    </View>
  );
}
