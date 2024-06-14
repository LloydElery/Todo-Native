import { View, Text, StyleSheet } from 'react-native';

const JustChecked = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>JustChecked</Text>
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

export default JustChecked;
