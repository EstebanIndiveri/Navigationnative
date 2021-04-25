import React from 'react';
import { View,Text, Button } from 'react-native'

const About = (props) => {
    const{navigation}=props;
    return ( 
        <View>
            <Text>About Screen</Text>
            <Button
            onPress={()=>navigation.navigate('Contact')}
            title='A contact'
            />
        </View>
     );
}
 
export default About;