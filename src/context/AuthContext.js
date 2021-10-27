import React, { useState, useEffect, createContext } from 'react';

import { auth } from '../firebase';

import { signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { ref, set } from '@firebase/database';
import { db } from '../firebase';

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
      const [user, setUser] = useState(false);

      useEffect(() => {
            handleAuthStateChange();
      }, [user]);

      const handleAuthStateChange = () => {
            onAuthStateChanged(auth, (res) => {
                  if (res) {
                        setUser(res);
                        //console.log(res.photoURL);
                  } else {
                        setUser(false)
                        console.log(user)
                  };
            });
      };

      const handleSignIn = (e, email, password) => {
            e.preventDefault();

            signInWithEmailAndPassword(auth, email, password)
                  .then(userCredential => {
                        console.log(userCredential);
                  });

            console.log("Login Normal");
      };

      const handleSignInWithPopup = async () => {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
      };

      const handleSignOut = () => {
            signOut(auth);
      }

      const writeUser = (user) => {
            set(ref(db, 'users/' + user.uid), user);
      };

      const value = {
            user,
            handleAuthStateChange,
            handleSignIn,
            handleSignInWithPopup,
            handleSignOut
      }


      return (
            <AuthContext.Provider value={{ user, handleAuthStateChange, handleSignIn, handleSignInWithPopup, handleSignOut }}>
                  { children }
            </AuthContext.Provider>
      )
};
