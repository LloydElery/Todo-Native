import {
  View,
  Text,
  StyleSheet,
  Appearance,
  useColorScheme,
} from 'react-native';

const TasksScreen = () => {
  let colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    console.log('Dark Theme');
  } else {
    console.log('Light Theme');
  }
  return (
    <>
      <View style={styles.container}>
        <Text>TasksScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TasksScreen;
