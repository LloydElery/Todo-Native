import { View, Text, StyleSheet } from 'react-native';

const CheckedScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>CheckedScreen</Text>
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
export default CheckedScreen;
