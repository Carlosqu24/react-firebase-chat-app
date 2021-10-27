import React, { useState, createContext } from 'react';

export const ThemeContext = createContext()

const initialTheme = 'light-theme'


export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState(initialTheme);

      const handleTheme = (e) =>  setTheme(e.target.id);

      const value = {
            theme,
            handleTheme
      };


      return (
            <ThemeContext.Provider value={value}>
                  { children }
            </ThemeContext.Provider>
      )
};
