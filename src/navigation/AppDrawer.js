import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import ExpenseListScreen from '../screen/ExpenseListScreen';
import React from 'react'

const Drawer = createDrawerNavigator();

export default AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Expense" component={ExpenseListScreen} />
        </Drawer.Navigator>
    );
}