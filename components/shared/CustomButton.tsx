import type React from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';

interface CustomButtonProps {
  full: boolean;
  category?: 'default' | 'text' | 'outlined' | 'primary' | 'secondary';
  shape?: 'round' | 'square' | 'pill';
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  full,
  category = 'default',
  shape = 'round',
  icon,
  size = 'medium',
  children,
  disabled = false,
  onPress,
  style,
}) => {
  const getButtonStyles = (): ViewStyle => {
    switch (category) {
      case 'text':
        return {
          backgroundColor: 'transparent',
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: '#B9FF66',
        };
      case 'primary':
        return {
          backgroundColor: '#B9FF66',
          shadowColor: '#191A23',
          borderWidth: 1,
          borderColor: '#B9FF66',
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 3,
        };
      case 'secondary':
        return {
          backgroundColor: '#191A23',
          borderWidth: 1,
          borderColor: '#191A23',
          shadowColor: '#FFFFFF',
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 3,
        };
      case 'default':
      default:
        return {
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#191A23',
          shadowColor: '#191A23',
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 3,
        };
    }
  };

  const getShapeStyles = (): ViewStyle => {
    switch (shape) {
      case 'square':
        return { borderRadius: 8 };
      case 'pill':
        return { borderRadius: 50 };
      case 'round':
        return { borderRadius: 16 };
      default:
        return { borderRadius: 16 };
    }
  };

  const getSizeStyles = (): ViewStyle & { textStyle: TextStyle } => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: category === 'text' ? 0 : 32,
          paddingVertical: category === 'text' ? 0 : 8,
          textStyle: { fontSize: 14 },
        };
      case 'medium':
        return {
          paddingHorizontal: category === 'text' ? 0 : 32,
          paddingVertical: category === 'text' ? 0 : 12,
          textStyle: { fontSize: 16 },
        };
      case 'large':
        return {
          paddingHorizontal: category === 'text' ? 0 : 32,
          paddingVertical: category === 'text' ? 0 : 14,
          textStyle: { fontSize: 18 },
        };
      default:
        return {
          paddingHorizontal: category === 'text' ? 0 : 32,
          paddingVertical: category === 'text' ? 0 : 12,
          textStyle: { fontSize: 18 },
        };
    }
  };

  const getTextStyles = (): TextStyle => {
    switch (category) {
      case 'text':
      case 'outlined':
        return {
          color: '#191A23',
        };
      case 'primary':
        return {
          color: '#191A23',
        };
      case 'secondary':
        return {
          color: '#FFFFFF',
        };
      case 'default':
      default:
        return {
          color: '#191A23',
        };
    }
  };

  const getDisabledStyles = (): ViewStyle => {
    if (!disabled) return {};
    return {
      backgroundColor: '#E6E6E6',
      borderColor: category === 'outlined' ? '#E6E6E6' : undefined,
      shadowColor: '#191A23',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 2,
    };
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      className="flex-row items-center justify-center"
      style={[
        full === true ? { width: '100%' } : { width: 'auto' },
        {
          paddingHorizontal: 32,
          paddingVertical: 16,
          alignItems: 'center',
          justifyContent: 'center',
        },
        getButtonStyles(),
        getShapeStyles(),
        sizeStyles,
        getDisabledStyles(),
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Text
        className="text-center font-sans-medium"
        style={[sizeStyles.textStyle, getTextStyles(), { fontWeight: '600' }]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
