import React from 'react'
import {View,Text,Button} from 'react-native'

const ProfileScreen = (props) => {
    return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Profile Screen</Text>
              <Button title="Go to Top" onPress={() => props.navigation.navigate('Home')} />
            </View>
    )
}

export default ProfileScreen