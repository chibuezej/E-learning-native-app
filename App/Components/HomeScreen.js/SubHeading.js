import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function SubHeading({text, color=Colors.BLACK}) {
  return (
    <View>
      <Text style={[{color: color},styles.header]}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
      fontFamily: 'outfit-bold',
      fontSize: 24,
     
    }
  })