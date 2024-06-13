import IntroAnimation from '@/components/IntroAnimation';
import LoginSheet from '@/components/LoginSheet';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <IntroAnimation />
      <LoginSheet />
    </View>
  );
}
