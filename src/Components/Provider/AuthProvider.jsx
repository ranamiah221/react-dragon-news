import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import app from "../../Firebase/firebase.config";

export const AuthContext= createContext(null);
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null);
   const [loading, setLoading]=useState(true);

   const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
   }
  
   const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUser=(name, photo)=>{
             setLoading(true);
           return updateProfile(auth.currentUser,{
            displayName: name,
             photoURL: photo,
           })
           
   }

   useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser)   
    })
    return ()=>{
        unSubscribe();
    }
   },[])

   const logOut=()=>{
    setLoading(true)
    return signOut(auth);
   }
    

    const authInfo={
    user,
    createUser,
    signIn,
    logOut,
    loading,
    updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node,
}