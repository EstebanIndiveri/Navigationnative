import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/Home';
const Stack=createStackNavigator();
import { Text } from 'react-native'
const HomeStack = (props) => {
    const{navigation}=props;

    return ( 
        <Stack.Navigator>
            <Stack.Screen
            name="Home"            
            component={Home}
            options={{title:'Home',headerLeft:()=><Text onPress={navigation.openDrawer}>Menu</Text>}}
            />
        </Stack.Navigator>
     );
}
 
export default HomeStack;