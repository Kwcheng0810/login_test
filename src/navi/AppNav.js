import React, {useContext, useState} from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../navi/AuthContext';


const AppNav = () => {
  
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading){
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
        </View>
    }
    
  return (
    <NavigationContainer>
        {userToken !== null ?
        <AppStack />:
        <AuthStack />
        }
    </NavigationContainer>
  )
}

export default AppNav