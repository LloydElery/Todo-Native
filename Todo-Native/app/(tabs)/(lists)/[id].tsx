import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const List = () => {
  const { id } = useLocalSearchParams();

  return (
    <>
      <View style={styles.container}>
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

export default List;
