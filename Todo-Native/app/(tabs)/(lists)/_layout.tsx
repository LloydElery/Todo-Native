import { Stack } from 'expo-router';

const ListsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'My Lists' }} />
    </Stack>
  );
};

export default ListsLayout;
