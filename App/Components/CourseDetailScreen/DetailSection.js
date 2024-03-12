import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

export default function DetailSection({ course }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: course.bannner.url }}
        style={{
          width: Dimensions.get("screen").width * 0.88,
          height: 190,
          borderRadius: 15,
        }}
      />
      <View style={{padding:10}}>

    
      <Text style={styles.text}>{course.name}</Text>
      <View>
        <View style={styles.flex}>
        <OptionItem icon={'book-outline'} value={course.chapters?.length+" Chapter"}/>
        <OptionItem icon={'time-outline'} value={course.time}/>
        </View>
       <View style={styles.flex}>
       <OptionItem icon={'person-circle-outline'} value={course?.author}/>
        <OptionItem icon={'cellular-outline'} value={course.level}/>
       </View>

      </View>
      <View>
        <Text style={{fontFamily: 'outfit-medium', fontSize:20}}>Description</Text>
        <Text style={styles.descriptionText}>{course.description?.markdown}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <View>
        <TouchableOpacity style={[{ backgroundColor: Colors.PRIMARY,},styles.botton]}>
            <Text style={styles.buttonText}>Enroll for free</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[{ backgroundColor: Colors.SECONDARY,},styles.botton]}>
            <Text style={styles.buttonText}>Membership $1.99/Mon</Text>
        </TouchableOpacity>
      </View>
      </View>
     
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,

    },
    text: {
        fontFamily: 'outfit-medium',
        fontSize: 22,
        marginTop: 10,
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      descriptionText:{
        fontFamily: 'outfit',
        color: Colors.GRAY,
        lineHeight: 23,
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        gap: 20
      },
      botton: {
        padding: 15,
        borderRadius: 15,
      },
      buttonText: {
        fontFamily: 'outfit',
        color: Colors.WHITE,
        textAlign: 'center',
        fontSize: 17,
      }
})