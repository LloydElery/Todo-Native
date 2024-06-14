import { View, Text, StyleSheet } from 'react-native';

const AllCheckedScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>AllCheckedScreen</Text>
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

export default AllCheckedScreen;
