import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState} from 'react';
import {ApiManager} from './ApiManager';

export const user_login = createContext();

export const user = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
    const login = (username, password) => {
    
        axios
          .post('${ApiManager}/auth/user', {
            username,
            password,
          })
          .then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          })
          .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false);
          });
      };
    }
    return (
        <user_login.Provider
          value={{
            userInfo,
            login
          }}>
          {children}
        </user_login.Provider>
      );
      
