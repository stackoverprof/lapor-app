import React, { useContext, useEffect, useState } from 'react'
import { AUTH, GoogleAUTH } from '../services/firebase'
import FireFetcher from '../services/FireFetcher'

const firebaseAuth = React.createContext()

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState('initial')   //initial/user/guest
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState({})
    const [isNew, setIsNew] = useState(false)
    const [errorAuth, setErrorAuth] = useState('')

    const authMethods = {
        google : ({navigation}) => {
            GoogleAUTH.addScope('profile')
            GoogleAUTH.addScope('email')

            const handleSignUp = async (res) => {
                //new user protocols
                console.log(res)
                setIsNew(true)
                navigation.push('RegistrationScreen')
            }

            return AUTH.signInWithPopup(GoogleAUTH).then(async res => {
                if (res.additionalUserInfo.isNewUser) {
                    handleSignUp(res)
                }
                setUser(res.user)
            })
            .catch(err => setErrorAuth(err.code))
        },

        signOut : () => {
            setIsNew(false)
            return AUTH.signOut()
        }
    }
    
    const listenUserData = (uid) => {
        FireFetcher.listen.userData(uid, {
            attach: (doc) => {
                setUserData(doc.data())
            },
            detach: () => {
                setUserData({})
            }
        })
    }

    useEffect(() => {
        const unsubscribe = AUTH.onAuthStateChanged(async user => {
            if(user) {
                listenUserData(user.uid)
                setUser(user) 
                setAuthState('user')
            } else {
                setAuthState('guest')
                setUser({})
                setIsNew(false)
            }
        })
        return unsubscribe
    }, [])

    return (
        <firebaseAuth.Provider value={{
            authMethods,
            authState,
            user,
            isNew,
            userData,
            errorAuth,
            setErrorAuth
        }}>
            { children }
        </firebaseAuth.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(firebaseAuth)