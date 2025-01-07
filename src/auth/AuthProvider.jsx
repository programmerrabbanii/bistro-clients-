import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init.config';
export const  AuthContext=createContext()
const provider= new GoogleAuthProvider()

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
    const googleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
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
        signInUser,
        googleLogin,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;