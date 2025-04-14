import { Text, TouchableOpacity, View } from 'react-native';

interface ClaimsProgramGuideContentProps {
  onClose: () => void;
}

export default function ClaimsProgramGuideContent({
  onClose,
}: ClaimsProgramGuideContentProps) {
  return (
    <View className="flex-1 rounded-t-[24px] bg-white-50">
      <View className="flex-1 p-4">
        <Text className="mb-4 font-sans-bold text-xl text-dark-500">
          Details of Reward Claim
        </Text>

        <View className="flex-1 items-center justify-center">
          <Text className="font-sans-regular text-base text-dark-500">
            No requirements yet
          </Text>
        </View>

        <TouchableOpacity
          onPress={onClose}
          className="mx-4 mb-4 items-center justify-center rounded-full bg-dark-500 py-3"
        >
          <Text className="font-sans-medium text-base text-white-50">
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
