import { useContext, useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import ThemeContext from './context/ThemeContext';
import ThemeContextProvider from './context/UserContextProvider';



function App() {
  // const {themeMode,lightTheme,darkTheme} = useContext(ThemeContext)

  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    
    <ThemeContext.Provider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
          </div>
      </div>
      </ThemeContext.Provider >
    
  )
}

export default App




