import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../views/Contact';
import Courses from '../views/Courses';
const Stack=createStackNavigator();

const ContactStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
            name="Contact"            
            component={Contact}
            options={{title:'Contact'}}
            />
            <Stack.Screen
            name="Courses"
            component={Courses}
            options={{title:'Courses'}}
            />
        </Stack.Navigator>
     );
}
 
export default ContactStack;