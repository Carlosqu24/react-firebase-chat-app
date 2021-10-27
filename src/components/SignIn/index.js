import React, { useState, useContext } from 'react'

// STYLES
import './SignIn.css'

// CONTEXT
import { AuthContext } from '../../context/AuthContext';


import { useHistory } from 'react-router-dom';

export const SignIn = () => {
      const [form, setForm] = useState({
            email: '',
            password: ''
      });

      const history = useHistory();

      const { user, handleAuthStateChange, handleSignIn, handleSignInWithPopup, handleSignOut } = useContext(AuthContext);

      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value
            })
      };

      const onSignIn = (e, email, password) => {
            handleSignIn(e, email, password);

            history.push('/chatroom')
      };


      return (
            <>
                  <form 
                        className="form form--sign-in"
                        onSubmit={(e) => onSignIn(e, form.email, form.password)}
                  >
                        <h2
                              className="form-title"
                        >Sign In</h2>

                        <input
                              name="email"
                              className="form-control"
                              type="text" 
                              placeholder="Email" 
                              onChange={handleChange}
                        />
                        <input 
                              name="password"
                              className="form-control"
                              type="password" 
                              placeholder="password"
                              onChange={handleChange}
                        />
                        <input 
                              type="submit"
                              className="form-control form-control--sign-in" 
                              value="Sign In"
                        />
                  </form>
            </>
      )
}
