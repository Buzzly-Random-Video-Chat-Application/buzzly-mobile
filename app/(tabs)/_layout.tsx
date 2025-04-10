import CustomTabBar from '@components/shared/CustomTabBar';
import TopBar from '@components/shared/TopBar';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        header: () => <TopBar notificationCount={5} screenName={route.name} />,
        tabBarActiveTintColor: '#B9FF66',
        tabBarInactiveTintColor: '#FFFFFF',
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="video-chat" options={{ title: 'Video Chat' }} />
      <Tabs.Screen name="live" options={{ title: 'Live' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
      <Tabs.Screen name="message" options={{ title: 'Message' }} />
    </Tabs>
  );
};

export default TabsLayout;
