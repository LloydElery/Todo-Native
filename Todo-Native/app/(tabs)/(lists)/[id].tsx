import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';

const ListID = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ headerTitle: `${id}` }} />
        <Text>{id}</Text>
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

export default ListID;
