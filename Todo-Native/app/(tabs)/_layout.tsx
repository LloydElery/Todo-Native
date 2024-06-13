import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='(home)' />
      <Tabs.Screen name='settings' />
      <Tabs.Screen name='(lists)' />
      <Tabs.Screen name='(tasks)' />
    </Tabs>
  );
}
