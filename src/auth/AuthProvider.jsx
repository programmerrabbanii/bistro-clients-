import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.init.config';
export const  AuthContext=useContext(null)

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUSer]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=(auth,currentUser=>{
            setUSer(currentUser)
            console.log('this is curret user', currentUser);
            setLoading(false)
        });
        return()=>{
            return unsubscribe
        }

    },[])

    const authInfo={
        user,
        createUser,
        signInUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;