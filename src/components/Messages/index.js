import React from 'react'

import './Messages.css'

import { v4 } from 'uuid'

import { useMessages } from '../../hooks/useMessages.js'

import { Message } from '../Message';

export const Messages = () => {
      const { messages, user } = useMessages()

      return (
            <ul className="chatroom__messages">
                  {
                        messages.map(message => (
                              <Message 
                                    key={v4()}
                                    message={message}
                              />
                        ))
                  }
            </ul>
      )
}
