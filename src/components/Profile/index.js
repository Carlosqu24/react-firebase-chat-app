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
                  <Link to="/"  className="button">Go to Chatroom</Link>
            </div>
      )
}
