//THis is duplicated login page file for testing login api

import React, {useContext, useState} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import {nameValidator } from '../validation/nameValidation'
import { passwordValidator } from '../validation/passwordValidation'
import Button from '../components/Button';
import TextInput from '../components/TextInput'
import { user_login } from '../api/user_api'
import { AuthContext } from '../api/AuthContext'


const LoginScreen = ({ navigation }) => {

  const [username , setName] = useState('')  
  const [password, setPassword] = useState('')
  const {login} = useContext(AuthContext);

  /*const login = async () => {
    const result = await onLogin(username, password);
    if (result && result,error){
      alert(result.msg)
    }
  };*/
  const onLoginPressed = () => {
    const nameError = nameValidator(username.value)
    const passwordError = passwordValidator(password.value)

    if (passwordError || nameError) {
      setName({ ...username, error: nameError })
      setPassword({ ...password, error: passwordError })
      return
    }if( !passwordError || !nameError ){
      user_login({
        username: username.toLocaleLowerCase(),
        password: password
      })
      .then((result) => {
        console.log(result);
        if(result.status ==200){
          AsyncStorage.setItem("AccessToken", result.data.token)
          navigation.replace("HomeScreen");
        }
      }).catch(err =>{
        console.error(err)
      })
      
    }else{
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        })
        alert(passwordError)
      }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
        value={username.value}
        placeholder ="Enter Username"
        label="Username"
        returnKeyType="next"
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        
        />
        

        <TextInput 
        value={password.value}
        placeholder = "Enter Password:" 
        returnKeyType="done"
        label="Password"
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        />

        <Button 
          mode="contained" 
          onPress={onLoginPressed} 
          title='Login'
        >
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
  ) 
  
}


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

export default LoginScreen