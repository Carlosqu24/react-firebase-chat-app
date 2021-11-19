import React, { useContext } from 'react'

import './Profile.css'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';

export const Profile = () => {

      const { id } = useParams()

      const { user } =useContext(AuthContext)

      const { theme, handleTheme } = useContext(ThemeContext)
     
      
      return (
            <div className="user-profile">
                  <h2>Welcome: {user.displayName}</h2>
                  <h3>Email: {user.email}</h3>
                  <img src={user.photoURL} alt="" />

                  <form >
                        <div>
                              <input onClick={(e)=>handleTheme(e)} id="light-theme" type="radio" name="theme" value="light-theme"/>
                              <label htmlFor="light-theme">Light theme</label>
                        </div>
                        <div>
                              <input onClick={(e)=>handleTheme(e)} id="dark-theme" type="radio" name="theme" value="dark-theme"/>
                              <label htmlFor="dark-theme">Dark theme</label>
                        </div>
                        <div>
                              <input onClick={(e)=>handleTheme(e)} id="lavender-theme" type="radio" name="theme" value="lavender-theme"/>
                              <label htmlFor="lavender-theme">Lavender theme</label>
                        </div>
                  </form>

                  <Link to="/"  className="button">Go to Chatroom</Link>
            </div>
      )
}
