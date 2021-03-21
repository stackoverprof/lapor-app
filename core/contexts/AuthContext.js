import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

const dummyAuth = {
    uid: 'NzakpECRzrVyaZzQDgCgLjsK35a2',
    email: 'rbintang.bagus11@gmail.com',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/areks-gm.appspot.com/o/Users%2Fprofile-pictures%2Fbintangbagus01-09592f3b.gif?alt=media&token=096e8d3b-721f-4c6d-ba1d-5f0f8c84da34',
}

const dummyData = {
    uid: 'NzakpECRzrVyaZzQDgCgLjsK35a2',
    email: 'rbintang.bagus11@gmail.com',
    username: '',
    tel: '',
    fullName: '',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/areks-gm.appspot.com/o/Users%2Fprofile-pictures%2Fbintangbagus01-09592f3b.gif?alt=media&token=096e8d3b-721f-4c6d-ba1d-5f0f8c84da34',
}

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState('initial')
    const [user, setUser] = useState({})
    const [authRef, setAuthRef] = useState({})
    const [isNew, setIsNew] = useState(false)
    const [errorAuth, setErrorAuth] = useState('')

    const authMethods = {
        google : ({navigation}) => {
            const handleSignUp = () => {
                setIsNew(true)
                navigation.push('RegistrationScreen')
            }

            setAuthRef(dummyAuth)
            setUser(dummyData)
            setAuthState('user')

            handleSignUp()
        },
        
        signOut : () => {
            setAuthRef({})
            setUser({})
            setAuthState('guest')
            setIsNew(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            authState,
            user,
            authRef,
            isNew,
            errorAuth,
            setErrorAuth,
            authMethods,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)