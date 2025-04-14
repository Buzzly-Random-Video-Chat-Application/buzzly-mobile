import CustomButton from '@components/shared/CustomButton';
import { Text, TextInput, View } from 'react-native';

export const AboutMeContent = () => {
  return (
    <View className="flex-1 justify-start rounded-[24px] bg-white-50 px-4 py-2">
      <View className="flex-column mt-4 items-start justify-center">
        <Text className="mb-4 font-sans-bold text-lg text-dark-500">
          About me
        </Text>

        <TextInput
          editable
          multiline
          numberOfLines={4}
          placeholder="Write something about you..."
          className="h-24 w-full rounded-lg bg-gray-50 px-4 py-2 text-sm text-dark-500 shadow-sm"
        />
      </View>
      <CustomButton
        category="secondary"
        shape="pill"
        size="medium"
        disabled={false}
        style={{ marginTop: 24 }}
        full
      >
        Save
      </CustomButton>
    </View>
  );
};
