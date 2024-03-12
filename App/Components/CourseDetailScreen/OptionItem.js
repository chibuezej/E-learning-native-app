import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

export default function OptionItem({icon,value}) {
  return (
    <View style={styles.row}>
    <Ionicons name={icon} size={18} color="black" />
    <Text style={{fontFamily: 'outfit'}}>{value}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 5,
      },
      
})