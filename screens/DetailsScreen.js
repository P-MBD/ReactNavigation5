import React from 'react';
import {View,Text, Button} from 'react-native';
const Details=(props)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text> {props.route.params.name} </Text>
        <Button title="Go to Back" onPress={() => props.navigation.goBack()}/>
      </View>
    );
  }
export default Details;