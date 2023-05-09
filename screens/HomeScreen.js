import React from 'react';
import {View,Text, Button} from 'react-native';
const HomeScreen=(props)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{props.route.params.id}</Text>
        <Button title="Go to Home Screen" onPress={() => props.navigation.push('Home', {id : 25})}/>
      </View>
    );
  }
  export default HomeScreen;