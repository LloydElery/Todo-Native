import { useAuth } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Button } from 'react-native';

const Auth = () => {
  const { signOut } = useAuth();
  return (
    <>
      <View style={styles.container}>
        <Text>Auth</Text>
        <Button title='Sign out' onPress={() => signOut()} />
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

export default Auth;
