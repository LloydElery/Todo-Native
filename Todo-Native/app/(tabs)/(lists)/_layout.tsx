import { Stack, useGlobalSearchParams } from 'expo-router';

const ListsLayout = () => {
  const glob = useGlobalSearchParams();

  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'My Lists' }} />
      <Stack.Screen name='[id]' options={{ title: glob.id?.toString() }} />
    </Stack>
  );
};

export default ListsLayout;
