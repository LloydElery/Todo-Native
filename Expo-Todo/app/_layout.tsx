import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Slot, SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded) return;
    const inAuthGroup = segments[0] === '(auth)';

    if (isSignedIn && !inAuthGroup) {
      router.replace('/(auth)/(drawer)/(lists)/new');
    } else if (!isSignedIn) {
      router.replace('/');
    }
  }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='login'
        options={{
          presentation: 'modal',
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='close-outline' size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </ClerkProvider>
  );
};

export default RootLayout;
