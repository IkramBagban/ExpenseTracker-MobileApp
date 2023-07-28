import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'

export default function Input({label,invalid,textInputConfig,style}) {
  const inputStyles = [styles.input]
  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiline)
  }
  if(invalid){
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer:{
    
    marginHorizontal:4,
    marginVertical:8,
  },
  label:{
    fontSize:12,
    color: GlobalStyles.colors.primary100,
    marginTop:4
  },
  input :{
    backgroundColor: GlobalStyles.colors.primary100,
    color:  GlobalStyles.colors.primary700,
    padding:6,
    borderRadius:6,
    fontSize:18
  },
  inputMultiline:{
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel:{
    color: GlobalStyles.colors.error500
  },
  invalidInput:{
    
    backgroundColor: GlobalStyles.colors.error50
  }
})