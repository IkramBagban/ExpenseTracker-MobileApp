import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'

export default function ExpensesSummery({expenses,periodName}) {

    const expensesSum = expenses.reduce((sum,expenses)=>{
        return sum + expenses.amount
    }, 0)

  return (
    <View style={styles.container} >
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent:'center',

  },
  period:{
    fontSize:12,
    color: GlobalStyles.colors.primary400,
  },
  sum : {
    fontSize: 16,
    fontWeight:'bold',
     color: GlobalStyles.colors.primary500
  }
})