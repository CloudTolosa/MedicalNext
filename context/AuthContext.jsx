import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebase";
import Login from "../pages";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  /* const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}; */

  const logIn = (auth, phoneNumber, appVerifier) => {
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert("error con el envio de numero celular");
      });
  };

  const logOut = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {user === true ? <Login/> : children}
    </AuthContext.Provider>
  );
};
