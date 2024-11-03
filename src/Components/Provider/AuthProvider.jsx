import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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
    

    const authInfo={
    user,
    createUser,
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