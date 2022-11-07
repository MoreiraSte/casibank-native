import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/home';
const Pilha = createStackNavigator()


export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    
                />
                 </Pilha.Navigator>
        </NavigationContainer>
    )
}