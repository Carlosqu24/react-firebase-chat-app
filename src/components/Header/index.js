import React, { useState, useContext } from 'react'

// STYLES
import "./Header.css"

import { AuthContext } from '../../context/AuthContext';


import { Link } from 'react-router-dom';{}

export const Header = () => {

      let { user, handleAuthStateChange, handleSignIn, handleSignInWithPopup, handleSignOut } = useContext(AuthContext);



      return (
            <header className="header">
                  <div className="container">
                  <h2 className="header__logo">
                        {
                              user 
                                    ? <Link to={`/profile/${user.uid}`}>Profile: {user.displayName}</Link>
                                    : <>Chat App</>
                        }
                  </h2>

                  {
                              user ? <button 
                                                className="navbar__btn navbar__btn--sign-out"
                                                onClick={handleSignOut}
                                          >
                                                Sign Out
                                          </button>
                                          : <button 
                                                className="navbar__btn navbar__btn--sign-in"
                                                onClick={handleSignInWithPopup}
                                          >
                                                Sign in
                                          </button>
                        }
                  </div>
            </header>
      )
}
