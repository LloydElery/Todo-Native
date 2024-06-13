import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'AuthLayoutComponent' }} />
    </Stack>
  );
};

export default AuthLayout;
