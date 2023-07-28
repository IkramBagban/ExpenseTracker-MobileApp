import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpensesContext } from '../components/expenses-context'
import { getDateMinusDays } from '../components/date'
import { fetchExpenses } from '../components/http'
import LoadingOverlay from '../components/LoadingOverlay'
// import ErrorOverlay from '../components/errorOverlay'

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()



  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses()
        expensesCtx.setExpenses(expenses)

        } catch (error) {
          setError('Could not fetch expenses!')
      }
      setIsFetching(false)
    
    }
    getExpenses()
  }, [])


  // if (error && !isFetching) {
  //   return <ErrorOverlay message={error} />
  // }
  if (isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    return (expense.date > date7DaysAgo) && (expense.date <= today)
  })
  return (
    <>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallbackText="No expenses registered for the last 7 days." />
    </>
  )
} 