import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { getFormattedDate } from './date'
import { GlobalStyles } from '../styles'

export default function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {

    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        },
    })
    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value : enteredValue , isValid: true}
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim.length > 0

        if (!amountIsValid || !dateIsValid || descriptionIsValid) {
            // Alert.alert("Invalid Input", "Please Check Your Input Values")
            setInputs((currentInputs)=>{
                return {
                    amount : { value: currentInputs.amount.value, isValid: amountIsValid},
                    date : { value: currentInputs.date.value, isValid: dateIsValid},
                    description : { value: currentInputs.description.value, isValid: dateIsValid},
                }
            })
            return;
        }
        onSubmit(expenseData)
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>

                <Input label="Amount" style={styles.rowInput}
                    invalid={!inputs.amount.isValid}
                    textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value,

                }} />
                <Input label="date" style={styles.rowInput}
                    invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY_MM_DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value,

                }} />
            </View>
            <Input label="Description"
             invalid={!inputs.description.isValid}
              textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value,
               

            }} />
            {    
                formIsInvalid  && (
                    <Text style={styles.errorText}>Invalid input Values _ please check your entered Data </Text>
                )
            }
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>cancel</Button>
                <Button style={styles.button} onPress={submitHandler}> {submitButtonLabel}</Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    errorText:{
        textAlign:'center',
        color: GlobalStyles.colors.error500,
        margin:8
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
})