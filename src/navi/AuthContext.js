//The latest connect api method i am trying but it show has id maven error when coding

import React, {createContext, useState, useContext, useEffect} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        setUserToken('ioiojlkad');
        setIsLoading(false);
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}} >
            {children}
        </AuthContext.Provider>
    );
}
