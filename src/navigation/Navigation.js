import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

const Stack=createStackNavigator();

const Navigation = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title:'Home',
            }}
            />
            <Stack.Screen
            name="About"
            component={About}
            options={{
                title:'About',
            }}
            />
            <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
                title:'Contact',
            }}
            />
        </Stack.Navigator>
     );
}
 
export default Navigation;