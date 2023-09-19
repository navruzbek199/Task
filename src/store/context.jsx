import React, { createContext, useState } from 'react'
export const GlobalContext  = createContext()
const Context = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};
    localStorage.setItem("theme" , theme)
    const [allData,setAllData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [])
    const state = {theme, changeTheme, allData,setAllData}
  return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
  )
}

export default Context