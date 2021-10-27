import React, { useState, useContext } from 'react'

// STYLES
import './Form.css'

import { AuthContext } from "../../context/AuthContext"
import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const Form = () => {
      const [form, setForm] = useState({
            message: ''
      });

      const { user } = useContext(AuthContext)

      const handleInputChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value
            });
      }

      function writeUserData(message) {
            message.timestamp = Date.now();

            set(ref(db, 'messages/' + message.id), message)
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            
            const newMessage = {
                  id: Date.now(),
                  username: user.displayName,
                  email: user.email,
                  message: form.message
            };

            setForm({message: ""});

            writeUserData(newMessage)            
      };


      return (
            <form className="form" onSubmit={handleSubmit}>
            <input
                  type="text"
                  className="form-control"
                  name="message"
                  placeholder="Write message"
                  value={form.message}
                  onChange={handleInputChange}
            />

            <input
                  type="submit"
                  className="form-control form-control--submit"
                  value="Send Message"
            />
      </form>
      )
}
