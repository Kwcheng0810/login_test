import React, {useContext, useState} from 'react'

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthProvider } from './src/navi/AuthContext';
import AppNav from './src/navi/AppNav'
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

function App() {
  


  return(
    <AuthProvider>
    <NavigationContainer>
      <Stack.Screen
          name="test"
          component={test}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false
          }}
        />
    </NavigationContainer>
    </AuthProvider>
  )
}

export default App;