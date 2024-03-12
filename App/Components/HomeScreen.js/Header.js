import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import Coin from '../../../assets/images/Coin.png'
import { Ionicons } from '@expo/vector-icons';
export default function Header() {
    const {isLoaded, isSignedIn, user} = useUser();
  return  isLoaded&&(
    <View>

   
    <View style={[{justifyContent: 'space-between'},styles.container]}>
      <View style={styles.container}>
        <Image source={{uri: user?.imageUrl}} style={{width:50, height: 50, borderRadius: 99}}/>
        <View>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.name}>{user?.firstName}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={Coin} style={{width: 35, height: 35}}/>
        <Text style={styles.name}>3580</Text>
      </View>
    </View>
    <View style={styles.inputContainer}>
        <TextInput placeholder='search Courses' style={{fontFamily: 'outfit', fontSize: 18}}/>
        <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       gap: 10,
       alignItems: 'center',
    },
    welcomeText: {
        color: Colors.WHITE,
        fontFamily: 'outfit',
    },
    name:{
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: 'outfit',
    },
    inputContainer: {
        backgroundColor: Colors.WHITE,
        paddingLeft: 20,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 99,
        marginTop: 20,
    }
})