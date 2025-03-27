import { createContext, useState } from 'react';
import './App.css'
import Form from './Form'
const ThemeContext=createContext();
function App() {
  const [theme,setTheme]=useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
     <Form />
    </ThemeContext.Provider>
  )
}

export default App
export {ThemeContext}
