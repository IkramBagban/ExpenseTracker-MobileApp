import { createContext, useReducer } from "react";
import { Switch } from "react-native";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.89,
        date: new Date('2023-12-3')
    },
    {
        id: 'e2',
        description: 'A pair of shirt',
        amount: 39.89,
        date: new Date('2023-05-13')
    },
    {
        id: 'e3',
        description: 'A pair of pants',
        amount: 79.89,
        date: new Date('2023-03-15')
    },
    {
        id: 'e4',
        description: 'Some bananas',
        amount: 10.29,
        date: new Date('2021-02-21')
    },
    {
        id: 'e5',
        description: 'Some bananas',
        amount: 10.29,
        date: new Date('2021-02-21')
    },
    {
        id: 'e6',
        description: 'Some oranges',
        amount: 13.29,
        date: new Date('2021-02-25')
    },
    {
        id: 'e7',
        description: 'i phone 12 pro max',
        amount: 100.23,
        date: new Date('2021-05-25')
    },
    {
        id: 'e8',
        description: 'Samsung A50',
        amount: 63.29,
        date: new Date('2021-07-28')
    },

]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: ()=> {},
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },

})

function expensesReducer(state, action) {
    switch (action.type) {

        case 'ADD':
            return [action.payload, ...state]
            case 'SET':
                const inverted = action.payload.reverse();
                return inverted;
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex((expense)=> expense.id === action.payload.id);
            const updateableExpense = state[updateableExpenseIndex]
            const updateitem = {...updateableExpense, ...action.payload.data}
            const updatedExpenses = [...state]
            updatedExpenses[updateableExpenseIndex] = updateitem 
            return updatedExpenses
        case 'DELETE':

            return state.filter((expense)=> (

                expense.id !== action.payload))
        default:
            return state
    }
}

function ExpensesContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expensesReducer, [])

    function addExpense(expenseData ) {
        dispatch({ type: "ADD" , payload:expenseData })
    }

    function setExpenses(expenses){
        dispatch({type:'SET', payload: expenses})
    }  
    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id })
    }
    function updateExpense(id, expenseData ) {
        dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses : expenseState,
        setExpenses:setExpenses,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>

}

export default ExpensesContextProvider;