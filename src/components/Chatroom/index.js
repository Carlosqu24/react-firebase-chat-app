import React, { useContext } from 'react'

// STYLES
import "./Chatroom.css"

// HOOKS
import { useMessages } from '../../hooks/useMessages.js'

import { ThemeContext } from '../../context/ThemeContext';

// COMPONENTS
import { Form } from '../Form/index';


export const Chatroom = () => {

      const { messages, user } = useMessages()

      const formatTimestampToHours = (timestamp) => {
            const hours = new Date(timestamp).getHours();
            const minutes = new Date(timestamp).getMinutes();

            return hours + ":" + minutes;
      };

      const { theme } = useContext(ThemeContext)


      return (
            <div className="chatroom">
                  <h2 className="chatroom__title">Chatroom</h2>
                  {
                        user ? (
                              <ul className="chatroom__messages">
                                    {
                                          messages.map(message => (
                                                <li
                                                      className={`chatroom-message ${message.email == user.email ? 'your-message' : ''}`}
                                                      key={message.id}
                                                ><p className="chatroom-message__text">{message.message}</p> <span className="chatroom-message__time">{formatTimestampToHours(message.timestamp)}</span></li>            
                                          ))
                                    }
                              </ul>
                        ) : (
                              <h2>You are not logged</h2>
                        )
                  }

                  <Form/>
            </div>
      )
}
