import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpensesContext } from '../components/expenses-context'

export default function AllExpenses() {
 const expensesCtx =  useContext(ExpensesContext)
  return (
    // <ExpensesOutput expensesPeriod='total' />
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='total' fallbackText="No registered expenses found." />
  )
}