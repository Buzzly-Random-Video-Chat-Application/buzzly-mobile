import type React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { SvgProps } from 'react-native-svg';

interface GenderButtonProps {
  label: string;
  icon: React.ComponentType<SvgProps>;
  isSelected: boolean;
  onPress: () => void;
}

const GenderButton: React.FC<GenderButtonProps> = ({
  label,
  icon: Icon,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`
        flex-col items-center justify-center
        rounded-[10px] px-[15px]
        py-[10px]
        ${
          isSelected
            ? 'border-primary-500 bg-primary-200'
            : 'border-white-50 bg-white-50'
        }
        min-w-[80px]
        border-[3px]
      `}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Icon width={60} height={60} accessibilityLabel={label} />
      <Text
        className={`
          mt-4 text-center
          font-sans text-base
          text-dark-500
        `}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default GenderButton;
