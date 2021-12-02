import React, { useState, useEffect } from 'react';

import { ref, onValue,set } from 'firebase/database';
import { db } from '../firebase';

const initialMessages = [];

export const useMessages = () => {
      const [messages, setMessages] = useState(initialMessages);

      useEffect(() => {
            
            try {
                   const startCountRef = ref(db, 'messages/')
 
                   onValue(startCountRef, (snapshot) => {
                         const data = snapshot.val();
 
                         let currentMessages = Object.values(data);
                         
                         setMessages(currentMessages);
                   });
            } catch (error) {
                   console.log(error);
            }
       }, []);

       function addMessage(message) {
              message.timestamp = Date.now();

              set(ref(db, 'messages/' + message.id), message)
       };

       return {
             messages,
             addMessage
       }
}