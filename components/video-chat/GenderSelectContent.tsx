import CustomButton from '@components/shared/CustomButton';
import { icons } from '@constants/icon';
import { useState } from 'react';
import { Text, View } from 'react-native';

import GenderButton from './GenderButton';

interface GenderSelectContentProps {
  onClose: () => void;
  initialSelected?: string;
}

export default function GenderSelectContent({
  onClose,
  initialSelected,
}: GenderSelectContentProps) {
  const [selectedGender, setSelectedGender] = useState(initialSelected);

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <View className="flex-1 justify-start rounded-[24px] bg-white-50 p-4">
      <Text className="font-sans-bold text-2xl text-dark-500">Connect to</Text>
      <Text className="font-sans text-base text-dark-500">
        Choose your preferred gender
      </Text>

      <View className="my-10 flex-row items-center justify-between">
        <GenderButton
          label="Both"
          icon={icons.both}
          isSelected={selectedGender === 'Both'}
          onPress={() => handleSelectGender('Both')}
        />
        <GenderButton
          label="Male"
          icon={icons.male}
          isSelected={selectedGender === 'Male'}
          onPress={() => handleSelectGender('Male')}
        />
        <GenderButton
          label="Female"
          icon={icons.female}
          isSelected={selectedGender === 'Female'}
          onPress={() => handleSelectGender('Female')}
        />
      </View>

      <View className="flex-row items-center justify-between gap-4">
        <CustomButton
          category="primary"
          shape="pill"
          size="medium"
          onPress={onClose}
          disabled={false}
          full
        >
          Go to match
        </CustomButton>
        <CustomButton
          category="default"
          shape="pill"
          size="medium"
          onPress={onClose}
          disabled={false}
          full={false}
        >
          Close
        </CustomButton>
      </View>
    </View>
  );
}
