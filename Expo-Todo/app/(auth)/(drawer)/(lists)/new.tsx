import { View, Text, StyleSheet } from 'react-native';

const NewList = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>NewList</Text>
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

export default NewList;
