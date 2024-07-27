import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            <Image
                source={require("../assets/vectorimage.png")}
                style={{ aspectRatio: 1, height: '100', width: '100%' }} />

            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10, color:'#000' }}>Instructions</Text>
            <View style={{ backgroundColor: 'purple', padding: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop:50 }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Each Quiz Has Four Options Quiz</Text>
                <Text style={{ color: '#fff', fontSize: 20 }}>Progress Will be Shown At Top</Text>
                <Text style={{ color: '#fff', fontSize: 20 }}>Score Would Be Shown At The End</Text>
            </View>

            <Pressable style={{ backgroundColor: 'purple', marginTop: 50, paddingLeft: 20, paddingHorizontal:20, paddingVertical:10, borderRadius: 5 }} onPress={()=>{navigation.navigate("QuizApp")}}>
                <Text style={{color:'white', fontSize:20}}>Start</Text>
            </Pressable>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})