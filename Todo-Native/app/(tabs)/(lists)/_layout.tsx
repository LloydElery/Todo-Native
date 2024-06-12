import { Stack } from 'expo-router';

const ListsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='[id]' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ListsLayout;
