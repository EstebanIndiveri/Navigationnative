import React from 'react';
import { View,Text,Button } from 'react-native'

const Contact = (props) => {
    const{navigation}=props;

    return ( 
        <View>
            <Text>Contact Screen</Text>
            <Button
            title="About"
            onPress={()=>navigation.navigate('About')}
            />
        </View>
     );
}
 
export default Contact;