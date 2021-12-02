import React, { useContext } from 'react'

// STYLES
import "./Chatroom.css"

// HOOKS
import { AuthContext } from '../../context/AuthContext';

// COMPONENTS
import { Form } from '../Form/index';
import { Messages } from '../Messages';


export const Chatroom = () => {
      const { user } = useContext(AuthContext)


      return (
            <div className="chatroom">
                  <h2 className="chatroom__title">Chatroom</h2>
                  {
                        user ? (
                              <>
                                    <Messages />
                                    <Form />
                              </>
                        ) : (
                              <h2>You are not logged</h2>
                        )
                  }
            </div>
      )
}
