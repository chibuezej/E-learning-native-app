import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_aW5jbHVkZWQtcmFjY29vbi02LmNsZXJrLmFjY291bnRzLmRldiQ"}>
    <View style={styles.container}>

      <SignedIn>
        <NavigationContainer>
        <TabNavigation />
        </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen />
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,

  },
});
