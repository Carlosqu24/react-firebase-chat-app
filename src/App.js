import React, { useState, useEffect, useContext } from 'react';

// STYLES
import './App.css';

// COMPONENTS
import { Header } from "./components/Header/index";
import { Chatroom } from "./components/Chatroom/index";
import { Profile } from './components/Profile';

// CONTEXT
import { AuthContext } from './context/AuthContext';

// REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const { user, handleAuthStateChange, handleSignIn, handleSignInWithPopup, handleSignOut } = useContext(AuthContext);



  return (
    <div className={`App`}>

      <Router>

        <Header />

        <div className="container">
            <Switch>
              <Route exact path="/"  component={Chatroom}/>
              <Route exact path="/profile/:id"  component={Profile}/>
            </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
