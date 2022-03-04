import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {
    const expenseList = useSelector(state => state.appReducer.expenses)
    let totalExpense = 0;
    expenseList.forEach(element => {
        totalExpense = totalExpense + Number(element.expenseAmount)
    });

    return (
        <View style={styles.main}>
            <Text>Total Expense : {totalExpense}</Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Expense') }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Check Expense List</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00bfff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    }
})

export default HomeScreen