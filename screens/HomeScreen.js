import React from 'react';
import {View,Text, Button} from 'react-native';
const HomeScreen=(props)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{props.id}</Text>
        <Button title="Go to Details Screen" onPress={() => props.navigation.navigate('Details')}/>
      </View>
    );
  }
  export default HomeScreen;