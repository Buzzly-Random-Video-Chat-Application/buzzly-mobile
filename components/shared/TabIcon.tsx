import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import type { StyleProp, TextStyle } from 'react-native';
import { Text, View } from 'react-native';
import type { TabIconProps } from 'tab';

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  const textStyle: StyleProp<TextStyle> = { color };

  return (
    <View className="flex items-center justify-center gap-2">
      <FontAwesomeIcon icon={icon} size={18} color={color} />
      <Text
        className={`${
          focused ? 'font-sans-semibold' : 'font-sans-medium'
        } text-xs`}
        style={textStyle}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
