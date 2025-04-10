// Import các icon từ Font Awesome
import {
  faCircle,
  faClock,
  faCommentDots,
  faEarthAmericas,
  faIcons,
} from '@fortawesome/free-solid-svg-icons';
import type { Route } from '@react-navigation/native';
import type { CustomTabBarProps } from '@types/tab';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import TabIcon from './TabIcon';

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#191A23',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderCurve: 'continuous' as const,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) => {
  const primaryColor = '#B9FF66';
  const inactiveColor = '#FFFFFF';

  const iconMap: { [key: string]: any } = {
    'video-chat': faEarthAmericas,
    live: faIcons,
    history: faClock,
    message: faCommentDots,
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: Route<string>, index: number) => {
        const { options } = descriptors[route.key];
        let label: string;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel as string;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <TabIcon
              icon={iconMap[route.name] || faCircle}
              color={isFocused ? primaryColor : inactiveColor}
              name={label}
              focused={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
