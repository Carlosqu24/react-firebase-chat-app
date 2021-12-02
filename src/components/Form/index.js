import React, { useState, useContext } from 'react'

// STYLES
import './Form.css'

// CONTEXT
import { AuthContext } from "../../context/AuthContext"

// HOOKS
import { useMessages } from "../../hooks/useMessages" 

export const Form = () => {
      const [form, setForm] = useState({
            message: ''
      });

      const { user } = useContext(AuthContext)

      const { addMessage } = useMessages()

      const handleInputChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value
            });
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            
            const newMessage = {
                  id: Date.now(),
                  username: user.displayName,
                  email: user.email,
                  message: form.message
            };

            setForm({message: ""});

            addMessage(newMessage);  
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
                  className={`form-control form-control--submit`}
                  value="Send Message"
            />
      </form>
      )
}
