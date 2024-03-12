import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen.js/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen.js/CourseList'

export default function HomeScreen() {
  return (
    <View>
        <View style={styles.backgroundContainer}>
        <Header />
        </View>
    <View style={styles.courseContainer}>
      <View style={{marginTop: -90}}>
      <CourseList level={'Basic'}/>

      </View>
      <View>
      <CourseList level={'Advanced'}/>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: Colors.PRIMARY,
        height: 250,
        padding: 20,
    },
    courseContainer: {
      padding: 20,
    }
})