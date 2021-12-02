import React, { useContext } from 'react'

import './Profile.css'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';


const themes = [
      {
            id: 1,
            name: "light-theme",
            title: "Light Theme"
      },
      {
            id: 2,
            name: "dark-theme",
            title: "Dark Theme"
      },
      {
            id: 3,
            name: "lavender-theme",
            title: "Lavender Theme"
      }
]


export const Profile = () => {
      const { user } = useContext(AuthContext)

      const { theme, handleTheme } = useContext(ThemeContext)
     
      
      return (
            <div className="user-profile">
                  <h2>Welcome: {user.displayName}</h2>
                  <h3>Email: {user.email}</h3>
                  <img src={user.photoURL} alt="" />

                  <div className="themes">
                        <h2>Themes</h2>

                        <div className="themes-container">
                              {
                                    themes.map(item =>(
                                          <button className={`theme-item ${theme == item.name && "theme-item--selected"}`} id={item.name} onClick={(e) => handleTheme(e)} key={item.id}>
                                                {item.title}
                                          </button>
                                    ))
                              }
                        </div>
                  </div>

                  <Link to="/"  className="button">Go to Chatroom</Link>
            </div>
      )
}
