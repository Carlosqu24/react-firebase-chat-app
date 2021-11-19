import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

const initialMessages = [];
const initialUsers = [];

export const useMessages = () => {
      const [messages, setMessages] = useState(initialMessages);
      const [users, setUsers] = useState(initialUsers);

      const { user } = useContext(AuthContext)

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

       useEffect(() => {
            
            try {
                   const startCountRef = ref(db, 'users/')
 
                   onValue(startCountRef, (snapshot) => {
                         const data = snapshot.val();
 
                         let currentUsers = Object.values(data);
                         
                         setUsers(currentUsers);
                   });
            } catch (error) {
                   console.log(error);
            }
       }, []);

       return {
             messages,
             user,
             users
       }
      
}