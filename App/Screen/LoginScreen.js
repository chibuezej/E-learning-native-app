import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import app from "./../../assets/images/app.png";
import Colors from "../Utils/Colors";
import google from "./../../assets/images/Google.png"
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image source={app} style={styles.image} />
      <View style={styles.background}>
        <Text style={styles.header}>CODEBOX</Text>
        <Text style={styles.body}>Your Ultimate Programming Learning Box</Text>
        <TouchableOpacity onPress={onPress} style={styles.googleContainer}>
  <Image source={google} style={styles.googleImage}/>
  <Text style={styles.googleText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 500,
    objectFit: "contain",
    marginTop: 70,
  },
  background: {
    height: 400,
    backgroundColor:Colors.PRIMARY,
    width: '100%',
    marginTop: -100,
    padding: 20,

  },
  header: {
    textAlign: 'center',
    fontSize: 35,
    color: Colors.WHITE,
    fontFamily: 'outfit-bold',
    marginTop: 30,
  },
  body: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    color: Colors.LIGHT_PRIMARY,
    fontFamily: 'outfit'
  },
  googleContainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 99,
    marginTop: 25,

  },
  googleImage: {
    width: 40,
    height: 40,
  },
  googleText: {
    display: 'flex',
    fontSize: 20,
    color: Colors.PRIMARY,
    fontFamily: 'outfit',
  
  }
});
