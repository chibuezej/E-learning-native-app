import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { Ionicons } from "@expo/vector-icons";

export default function CourseItem({item}) {
  return (
    <View style={styles.box}>
    <Image
      source={{ uri: item?.bannner?.url }}
      style={{ width: 210, height: 120, borderRadius: 15 }}
    />
    <View style={{ padding: 7 }}>
      <Text style={styles.subHeader}>{item.name}</Text>
      <View style={styles.flex}>
        <View style={styles.row}>
          <Ionicons name="book-outline" size={24} color="black" />
          <Text style={{fontFamily: 'outfit'}}>{item?.chapters?.length} Chapters</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="time-outline" size={24} color="black" />
          <Text>{item?.time}</Text>
        </View>
      </View>
      <Text style={styles.price}>{item.price==0?"Free" : item.price}</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    box: {
      padding: 10,
      backgroundColor: Colors.WHITE,
      marginRight: 15,
      borderRadius: 15,
    },
    subHeader: {
      fontFamily: "outfit-medium",
      fontSize: 17,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      marginTop: 5,
    },
    flex: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      marginTop: 5,
      color: Colors.PRIMARY,
      fontFamily: 'outfit-medium',
    }
  });
  