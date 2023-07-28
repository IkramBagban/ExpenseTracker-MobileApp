import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles'
import { getFormattedDate } from './date'
import { useNavigation } from '@react-navigation/native'

export default function ExpenseItem({ id, description, date, amount }) {
    const navigation = useNavigation()
    function expensePressHandler() {
        navigation.navigate('ManageExpense', {
            expenseId: id
        })
    }
    // const formattedDate = date ? getFormattedDate(date) : 'something went wrong bro';
    //const formattedAmount = amount ? amount.toFixed(2) : "0.00";
    return (
        <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>

            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.date}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    }
})