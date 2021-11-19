import React, { useContext } from 'react';

// STYLES
import './App.css';

// COMPONENTS
import { Header } from "./components/Header/index";
import { Chatroom } from "./components/Chatroom/index";
import { Profile } from './components/Profile';



import { ThemeContext } from './context/ThemeContext';

// REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>

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
