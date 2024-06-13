import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/styles';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpPress = async () => {};
  const onLoginPress = async () => {};

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} // keyboard behaviour
        keyboardVerticalOffset={1}
        style={styles.container}
      >
        {loading && (
          <View style={defaultStyles.loadingOverlay}>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </View>
        )}
        <Image
          style={styles.logo}
          source={require('../assets/images/Add.png')}
        />
        <Text style={styles.title}>
          {type === 'login' ? 'Welcome!' : 'Create an account'}
        </Text>
        <View style={{ marginBottom: 30 }}>
          <TextInput
            style={defaultStyles.inputField}
            autoCapitalize='none'
            placeholder='Email'
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <TextInput
            style={defaultStyles.inputField}
            autoCapitalize='none'
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {type === 'login' ? (
          <TouchableOpacity
            onPress={onLoginPress}
            style={[defaultStyles.btn, defaultStyles.btnPrimary]}
          >
            <Text style={defaultStyles.btnPrimaryText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onSignUpPress}
            style={[defaultStyles.btn, defaultStyles.btnPrimary]}
          >
            <Text style={defaultStyles.btnPrimaryText}>Create account</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default LoginScreen;
