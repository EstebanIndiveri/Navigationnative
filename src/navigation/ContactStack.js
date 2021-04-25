import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../views/Contact';
const Stack=createStackNavigator();

const ContactStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
            name="Contact"            
            component={Contact}
            options={{title:'Contact'}}
            />
        </Stack.Navigator>
     );
}
 
export default ContactStack;