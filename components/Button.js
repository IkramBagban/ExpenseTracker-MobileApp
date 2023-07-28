import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'

export default function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <View style={[styles.button,  mode === 'flat' && styles.flat]}>
            <Text style={[styles.buttonText,  mode === 'flat' && styles.flat]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        padding:8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    buttonText:{
        color: 'white',
        textAlign:'center',
    },
    flat:{
        backgroundColor:'transparent'
    },
    pressed: {
        opacity:0.75,
         backgroundColor: GlobalStyles.colors.primary100,
        borderRadius:4,
}
})