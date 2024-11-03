import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";

import PropTypes from "prop-types";
import app from "../../Firebase/firebase.config";

export const AuthContext= createContext(null);
 const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser]=useState(null);

   const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
    

    const authInfo={
    user,
    createUser,
    signIn,
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