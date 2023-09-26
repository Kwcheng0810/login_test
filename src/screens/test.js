import React, {useContext, useState} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import {nameValidator } from '../validation/nameValidation'
import { passwordValidator } from '../validation/passwordValidation'
import Button from '../components/Button';
import TextInput from '../components/TextInput'
import { user_login } from '../api/user_api'




export default function LoginScreen({ navigation }) {
  const [username, setName] = useState({ value: '', error: '' })  
  const [password, setPassword] = useState({ value: '', error: '' })
  const {isLoading, login} = useContext(user_login);

  const onLoginPressed = () => {
    const nameError = nameValidator(username.value);
    const passwordError = passwordValidator(password.value);

    if (passwordError || nameError) {
        setName({ ...username, error: nameError })
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
        value={username.value}
        placeholder ="Enter Username"
        label="Username"
        returnKeyType="next"
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
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

        <Button 
          mode="contained" 
          onPress={(onLoginPressed) => {login(username, password);
        }} 
        title='Login'
        >
        Login
        </Button>

        <View style={styles.row}> 
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
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

