import { Stack } from 'expo-router';

const TasksLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Done Tasks' }} />
    </Stack>
  );
};

export default TasksLayout;
