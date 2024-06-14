import { View, Text, StyleSheet } from 'react-native';

const ListsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>ListsScreen</Text>
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

export default ListsScreen;
