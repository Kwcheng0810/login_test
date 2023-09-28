//Login page with validation but without login api

import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import {nameValidator } from '../validation/nameValidation'
import { passwordValidator } from '../validation/passwordValidation'
import Button from '../components/Button';
import TextInput from '../components/TextInput'



export default function LoginScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })  
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    const passwordError = passwordValidator(password.value)

    if (passwordError || nameError) {
      setName({ ...name, error: nameError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
        value={name.value}
        placeholder ="Enter Username"
        label="Username"
        returnKeyType="next"
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        autoCapitalize="none"
        
        />

        <TextInput 
        value={password.value}
        placeholder = "Enter Password:" 
        returnKeyType="done"
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        />

        <Button mode="contained" onPress={onLoginPressed} title='Login'>
        Login
        </Button>

        <View style={styles.row}> 
          <Text>Continue as guest? </Text>
          <TouchableOpacity onPress={() => navigation.replace('HomeScreen')}>
            <Text style={styles.link}>Click here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      

  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper:{
    width: '80%'
  },
  input:{
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link:{
    color: 'blue',
  }
});

