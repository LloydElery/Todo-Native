import { Stack } from 'expo-router';

const ModalLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'ModalLayoutComponent' }} />
    </Stack>
  );
};

export default ModalLayout;
