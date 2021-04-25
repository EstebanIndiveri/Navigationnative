import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
// import AboutStack from './AboutStack';
import ContactStack from './ContactStack';
import Home from '../views/Home'
import Contact from '../views/Contact'

const Drawer = createDrawerNavigator();

const Navigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{title:'Home'}}
            />
             <Drawer.Screen
            name="Contact"
            component={ContactStack}
            options={{title:'Contact'}}
            />
        </Drawer.Navigator>
    )
}
 
export default Navigation;