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
                                                      className="chatroom__message"
                                                      key={message.id}
                                                >{formatTimestampToHours(message.timestamp)} - {message.email}: {message.message}</li>
                                          ))
                                    }
                              </ul>
                        ) : (
                              <h2>No esta logueado</h2>
                        )
                  }

                  <Form/>
            </div>
      )
}
