import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { appSetExpenseCategory, appSetExpenseItem } from '../store/actions/appActions'
import RNPickerSelect from 'react-native-picker-select';
import _ from 'lodash';



const ExpenseListScreen = () => {
    const [expenseCategoryItem, setexpenseCategoryItem] = useState('')
    const [expenseType, setExpenseType] = useState('')
    const [expenseAmount, setExpenseAmount] = useState(0)

    const expenseCategoryList = useSelector(state => state.appReducer.expenseCategories)
    const expenseList = useSelector(state => state.appReducer.expenses)
    const dispatch = useDispatch()

    const saveExpenseCategory = () => {
        if (!!expenseCategoryItem) {
            dispatch(appSetExpenseCategory(expenseCategoryItem))
            setexpenseCategoryItem('')
        }
    }


    const addExpense = () => {
        if (!!expenseType && !!expenseAmount) {
            dispatch(appSetExpenseItem({
                expenseType,
                expenseAmount: parseInt(expenseAmount)
            }))
            setExpenseType('')
            setExpenseAmount('')
        } else {
            Alert.alert(
                'Error',
                'Enter Both type and amount',
                [{ text: 'OK' }],
                { cancelable: true },
            );
        }
    }


    return (
        <View style={styles.main}>
            <View style={styles.CategoryinputView}>
                <TextInput
                    style={styles.input}
                    value={expenseCategoryItem}
                    placeholder="Category"
                    autoCapitalize="none"
                    autoComplete='off'
                    autoCorrect={false}
                    onChangeText={(value) => setexpenseCategoryItem(value)}
                />
                <TouchableOpacity
                    onPress={saveExpenseCategory}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add Expense Category</Text>
                </TouchableOpacity>
            </View>
            {_.size(expenseCategoryList) > 0 &&
                <View style={styles.expenseView}>
                    <Text style={styles.addExpenseTitle}>Add Expense</Text>
                    <View style={styles.addExpenseView}>
                        <View>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                pickerProps={{ mode: "dropdown" }}
                                fixAndroidTouchableBug={true}
                                style={{ ...pickerSelectStyles }}
                                onValueChange={(value) => setExpenseType(value)}
                                value={expenseType}
                                items={expenseCategoryList?.map(item => ({ label: item, value: item }))}
                            />
                        </View>
                        <TextInput
                            style={styles.inputAmount}
                            value={expenseAmount}
                            placeholder="Amount"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoComplete='off'
                            autoCorrect={false}
                            onChangeText={(value) => setExpenseAmount(value)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={addExpense}
                        style={styles.button}
                    >

                        <Text style={styles.buttonText}>Add Expense Category</Text>
                    </TouchableOpacity>
                </View>}

            {_.size(expenseList) > 0 &&
                <>
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderTitle}>Category</Text>
                        <Text style={styles.listHeaderTitle}>Amount</Text>
                    </View>
                    <FlatList
                        data={expenseList}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text>{item.expenseType}</Text>
                                <Text>{item.expenseAmount}</Text>
                            </View>
                        )}
                    />
                </>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    CategoryinputView: {
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#00bfff',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
    expenseView: {

    },
    addExpenseTitle: {
        fontSize: 20,
    },
    addExpenseView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    inputAmount: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: 100,
        marginHorizontal: 20
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomColor: '#777',
        borderBottomWidth: 1,
        marginVertical: 5
    },

    listHeaderTitle: {
        fontWeight: '600',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginVertical: 5
    },

});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 150,
        borderWidth: 1,
        borderRadius: 4,
        color: '#777',
        paddingVertical: 7,
        paddingLeft: 5,
        paddingRight: 25,
        alignItems: 'center',
        borderColor: '#777',
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    inputAndroid: {
        width: 150,
        borderWidth: 1,
        borderRadius: 4,
        color: '#777',
        paddingVertical: 2,
        paddingLeft: 5,
        paddingRight: 25,
        alignItems: 'center',
        borderColor: '#777',
        backgroundColor: '#ffffff',
        alignSelf: 'center'
    },
    iconContainer: {
        top: 5,
        right: 5,
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
});

export default ExpenseListScreen