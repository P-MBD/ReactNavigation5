// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import Details from './screens/DetailsScreen';
import Setting from './screens/SettingScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();
const Menu = () => {
  return(
    <MaterialIcons name="menu" color="#fff" size={25} />
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home" screenOptions={{
          headerStyle: {
              backgroundColor:'#333'
          },
  
          headerTitleStyle: { fontSize: 10},
          headerTintColor: '#fff',
          headerTransparent: true,
          
          headerRight : props  => <Menu {...props} />

        }}>
        <Stack.Screen name="Home" component={Home} initialParams={{id : 200}}  
          options={{
            title:'test'
          }}
           />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;