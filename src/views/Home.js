import React from 'react';
import { View,Text,Button } from 'react-native'

const Home = (prop) => {
    const{navigation}=prop
    return ( 
        <View>
            <Text>Home Screen</Text>
            <Button
            onPress={()=>navigation.navigate('About')}
            title="Ir a About"
            />
            <Button
            onPress={()=>navigation.navigate('Contact')}
            title="Ir a Contact"
            />
            {/* Declarated spec Stack Screen to Tab */}
            <Button
            onPress={()=>navigation.navigate('Contact',{screen:'Courses'})}
            title="Ir a curso"
            />
        </View>
     );
}
 
export default Home;