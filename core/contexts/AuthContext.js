import React, { useContext, useEffect, useState } from 'react'
import * as Google from 'expo-google-app-auth'

const AuthContext = React.createContext()

// const fetchDB = () => {
//     //if no result, berarti new user
//     return {
//         id: '100015577451492073996',
//         email: 'rbintang.bagus11@gmail.com',
//         photoUrl: 'https://firebasestorage.googleapis.com/v0/b/areks-gm.appspot.com/o/Users%2Fprofile-pictures%2Fbintangbagus01-09592f3b.gif?alt=media&token=096e8d3b-721f-4c6d-ba1d-5f0f8c84da34',
//         username: '',
//         tel: '',
//         fullName: '',
//     }
// }

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState('initial')
    const [accessToken, setAccessToken] = useState('')
    const [user, setUser] = useState({})
    const [authRef, setAuthRef] = useState({})
    const [isNew, setIsNew] = useState(true)
    const [errorAuth, setErrorAuth] = useState('')

    const authMethods = {
        google : async ({navigation}) => {
            const handleSignUp = () => {
                setIsNew(true)
                //insert data ke db user
                navigation.push('RegistrationScreen')
            }

            Google.logInAsync({
                androidClientId: '864888909882-l3iqtf3947l9nb2s3bgh12gkkat2citv.apps.googleusercontent.com',
                iosClientId: '864888909882-52dg581j3mac0l5oigutmfscndpdc95a.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            })
            .then(res => {
                if (res.type === 'success') {
                    setAuthRef(res.user)

                    // fetchDB()
                    // .then( user lama)
                    // .catch( user baru)

                    //case user baru
                    console.log(res.user)
                    setUser({
                        id: res.user.id,
                        email: res.user.email,
                        photoUrl: res.user.photoUrl,
                        username: '',
                        tel: '',
                    })
                    setAuthState('user')
                    setAccessToken(res.accessToken)
                    handleSignUp()
                } else {
                    return console.log('cancelled')
                }
            })
            .catch(err => console.log(err))           

        },
        
        signOut : () => {
            setAuthRef({})
            setUser({})
            setAuthState('guest')
            setIsNew(false)
        }
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <AuthContext.Provider value={{
            authState,
            accessToken,
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