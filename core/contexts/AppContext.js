import React, { useContext, createContext } from 'react'
import AuthProvider from './AuthContext'

const AppContext = createContext()

const AppProvider = ({children}) => {

    return (
        <AppContext.Provider value={{}}>
            <AuthProvider>
                { children }
            </AuthProvider>
        </AppContext.Provider>
    )
}

export default AppProvider
export const useApp = () => useContext(AppContext)