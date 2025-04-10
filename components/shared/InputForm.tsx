/* eslint-disable no-nested-ternary */
import type React from 'react';
import type {
  KeyboardTypeOptions,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface InputFormProps extends Omit<TextInputProps, 'style'> {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  errors?: string[];
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  onValidation?: (value: string) => boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  helperTextStyle?: TextStyle;
}

export default function InputForm({
  label,
  placeholder,
  value,
  setValue,
  required = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  errors = [],
  secureTextEntry = false,
  rightIcon,
  onRightIconPress,
  onValidation,
  containerStyle,
  labelStyle,
  inputStyle,
  helperTextStyle,
  onBlur,
  onFocus,
  multiline = false,
  numberOfLines = 1,
  editable = true,
  accessibilityLabel,
  accessibilityHint,
  ...textInputProps
}: InputFormProps) {
  const handleBlur = (e: any) => {
    if (onBlur) onBlur(e);
    if (onValidation) {
      onValidation(value);
    }
  };

  const handleFocus = (e: any) => {
    if (onFocus) onFocus(e);
  };

  const hasError = errors.length > 0;

  return (
    <View style={containerStyle}>
      <View className="flex-row items-center">
        <Text
          className="mt-2 font-sans-medium text-gray-500"
          style={labelStyle}
        >
          {label}
        </Text>
        {required && <Text className="ml-1 mt-2 text-red-500">*</Text>}
      </View>

      {/* Input */}
      <View className="relative">
        <TextInput
          className={`font-sans-regular mt-1 rounded-lg border px-4 py-3 text-dark-500 ${
            hasError ? 'border-red-500' : 'border-gray-300'
          }`}
          style={inputStyle}
          placeholder={placeholder}
          placeholderTextColor="#9DA0A9"
          value={value}
          onChangeText={setValue}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          onBlur={handleBlur}
          onFocus={handleFocus}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          accessibilityLabel={accessibilityLabel || label}
          accessibilityHint={
            accessibilityHint || `Enter your ${label.toLowerCase()}`
          }
          {...textInputProps}
        />
        {rightIcon && (
          <TouchableOpacity
            className="absolute right-4 top-4"
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {/* Chỉ hiển thị lỗi cuối cùng */}
      {hasError && (
        <View className="mt-2 flex-row items-center justify-end">
          <Text
            className="font-sans-regular text-red-500"
            style={helperTextStyle}
          >
            {errors[errors.length - 1]}
          </Text>
        </View>
      )}
    </View>
  );
}
