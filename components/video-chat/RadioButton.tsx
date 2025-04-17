import type React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

interface RadioButtonProps {
  label: string;
  icon?: React.FC<SvgProps>;
  isSelected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  icon: Icon,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity className="flex-row items-center py-2" onPress={onPress}>
      <View
        className={`mr-3 h-6 w-6 rounded-full border ${
          isSelected ? 'h-6 w-6 border-2 border-primary-600' : 'border-dark-500'
        } items-center justify-center`}
      >
        {isSelected && <View className="h-3 w-3 rounded-full bg-primary-600" />}
      </View>
      <Text className="font-sans text-base text-dark-500">{label}</Text>
      {Icon && <Icon width={24} height={24} style={{ marginLeft: 8 }} />}
    </TouchableOpacity>
  );
};

export default RadioButton;
