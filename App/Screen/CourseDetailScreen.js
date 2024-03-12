import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
export default function CourseDetailScreen() {
    const navigate = useNavigation();
    const params = useRoute().params;
    useEffect(() => {
        console.log(params.course, 'line 9')
    },[params.course])
  return params.course&& (
    <View style={{padding:20}}>
        <TouchableOpacity onPress={()=>navigate.goBack()}>

        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <DetailSection course={params.course}/>
    <ChapterSection />
    </View>
  )
}