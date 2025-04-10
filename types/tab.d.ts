export type TabIconProps = {
  icon: IconProp;
  color: string;
  name: string;
  focused: boolean;
};

export type CustomTabBarProps = {
  state: NavigationState;
  descriptors: { [key: string]: any };
  navigation: any;
};
