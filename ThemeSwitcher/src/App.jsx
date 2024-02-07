import { useState } from "react"
import { ThemeProvider } from "./context/Theme"



function App() {
  const[themeMode,setThemeMode]=useState('light')

  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  

  return (
    <ThemeProvider value={themeMode,lightTheme , darkTheme}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
