import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../views/About';
import Contact from '../views/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';

// const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const Navigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{title:'Home'}}
            />
            <Tab.Screen
            name="About"
            component={About}
            options={{title:'About'}}
            />
            <Tab.Screen
            name="Contact"
            component={Contact}
            options={{title:'Contact'}}
            />
        </Tab.Navigator>
    )
    // return ( 
    //     <Stack.Navigator>
    //         <Stack.Screen
    //         name="Home"
    //         component={Home}
    //         options={{
    //             title:'Home',
    //         }}
    //         />
    //         <Stack.Screen
    //         name="About"
    //         component={About}
    //         options={{
    //             title:'About',
    //         }}
    //         />
    //         <Stack.Screen
    //         name="Contact"
    //         component={Contact}
    //         options={{
    //             title:'Contact',
    //         }}
    //         />
    //     </Stack.Navigator>
    //  );
}
 
export default Navigation;