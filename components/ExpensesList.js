import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'

export default function ExpensesList({expenses}) {
  function renderExpenseItem(itemData){
    return <ExpenseItem {...itemData.item} />
  }

  return (
    <View style={{height: 550}}>
<FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
    </View>
  )
}