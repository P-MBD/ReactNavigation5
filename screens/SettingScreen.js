import React from 'react';
import {View,Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createStackNavigator();

const SettingScreen=(props)=> {
    return (
      
            <Stack.Navigator >
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
     
    );
  }
export default SettingScreen;