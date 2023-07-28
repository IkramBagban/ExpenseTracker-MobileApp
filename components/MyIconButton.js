import { View, Text, Pressable,StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'

export default function IconButton({color, size, name , onPress}) {
  return (
    <Pressable onPress={onPress}  style={({pressed})=> pressed && styles.pressed }>
    <View style={styles.buttonContainer}>
        
    <Ionicons name={name} color={color} size={size} />
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 24,
        padding: 6,
        margin: 8,
    },
    pressed:{
        opacity:0.75
    },

})