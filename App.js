import React from 'react';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/navigation/navigation';
const App = () => {
  return ( 
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}>
      </SafeAreaView> */}
      <Navigation/>
    </NavigationContainer>
   );
}

export default App;
const styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  }
})


