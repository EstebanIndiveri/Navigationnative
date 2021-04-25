import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../views/Contact';
import About from '../views/About';
const Stack=createStackNavigator();

const AboutStack = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
            name="About"            
            component={About}
            options={{title:'About'}}
            />
        </Stack.Navigator>
     );
}
 
export default AboutStack;