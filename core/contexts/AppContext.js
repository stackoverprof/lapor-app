import React, { useState, useContext, createContext } from 'react'
import AuthProvider from './AuthContext'

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [hasEnteredMain, setHasEnteredMain] = useState(false)

    return (
        <AppContext.Provider value={{
            hasEnteredMain,
            setHasEnteredMain
        }}>
            <AuthProvider>
                { children }
            </AuthProvider>
        </AppContext.Provider>
    )
}

export default AppProvider
export const useApp = () => useContext(AppContext)