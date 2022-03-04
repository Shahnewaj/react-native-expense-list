
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './AppDrawer';


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppDrawer />
        </NavigationContainer>
    )
}

export default AppNavigator