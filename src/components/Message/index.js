import React, { useContext } from 'react'

import './Message.css'

import { ThemeContext } from '../../context/ThemeContext';

import { useMessages } from '../../hooks/useMessages.js'

export const Message = ({ message }) => {
      const { user } = useMessages();

      const { theme } = useContext(ThemeContext);

      const formatTimestampToHours = (timestamp) => {
            const hours = new Date(timestamp).getHours();
            const minutes = new Date(timestamp).getMinutes();

            return hours + ":" + minutes;
      };

      return (
            <li
                  className={`chatroom-message chatroom-message--${theme} ${message.email == user.email ? 'your-message' : ''}`}
                  key={message.id}
            >
                  <p className="chatroom-message__text">
                        {message.message}
                  </p> 
                  <span className="chatroom-message__time">
                        {formatTimestampToHours(message.timestamp)}
                  </span>
            </li>
      )
}
