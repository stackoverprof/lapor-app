import React, { useContext, useEffect, useState, createContext } from 'react'
import * as Google from 'expo-google-app-auth'
import * as SecureStore from 'expo-secure-store'

const sampleData = {
    id: '113814096624824806623',
    email: 'bintangbagus01@mail.ugm.ac.id',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/areks-gm.appspot.com/o/Users%2Fprofile-pictures%2Fbintangbagus01-09592f3b.gif?alt=media&token=096e8d3b-721f-4c6d-ba1d-5f0f8c84da34',
    username: 'errbint',
    tel: '+628988355006',
    fullName: 'R.Bintang Bagus Putra Angkasa',
}

const fetchToServerDB = (id) => {
    return new Promise((resolve, reject) => {
        if (id === '113814096624824806623') {
            resolve(sampleData)
        }
      
        reject(new Error("no user"))
    })
}

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = useState('initial')
    const [accessToken, setAccessToken] = useState('')
    const [user, setUser] = useState({})
    const [isNew, setIsNew] = useState(false)
    const [errorAuth, setErrorAuth] = useState('')
    const [showAuthArea, setShowAuthArea] = useState(true)

    const storeToken = {
        save: async (value) => {
            await SecureStore.setItemAsync('accessToken', value)
        },
        get: async () => {
            const value = await SecureStore.getItemAsync('accessToken')
            if (value) return value
            else return ''
        },
        delete: async () => {
            await SecureStore.deleteItemAsync('accessToken')
        }
    }

    const procedures = {
        newUser: async (res, afterSignedUp) => {
            console.log('new user')
            setIsNew(true)
            setUser({
                id: res.user.id,
                email: res.user.email,
                photoUrl: res.user.photoUrl,
                username: '',
                tel: '',
                fullName: `${res.user.givenName} ${res.user.familyName}`
            })
            await storeToken.save(res.accessToken)
            setAccessToken(res.accessToken)
            setAuthState('user')
            //insert data ke db user
            afterSignedUp()
        },
        existingUser: async (res, data, afterSignedIn) => {
            console.log('existing')
            setIsNew(false)
            setUser(data)
            await storeToken.save(res.accessToken)
            setAccessToken(res.accessToken)
            setAuthState('user')

            afterSignedIn()
        },
        continueSession: async (id) => { //should be token
            //validate token first, true then: 
            const res = await fetchToServerDB(id)
            setIsNew(false)
            setUser(res)
            setAuthState('user')
            //,false then: back to all initial
            //storeToken.delete()
        } 
    }

    const authMethods = {
        google : async ({afterSignedIn = () => {}, afterSignedUp = () => {}}) => {
            
            return Google.logInAsync({
                androidClientId: '864888909882-l3iqtf3947l9nb2s3bgh12gkkat2citv.apps.googleusercontent.com',
                iosClientId: '864888909882-52dg581j3mac0l5oigutmfscndpdc95a.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            })
            .then(async res => {
                if (res.type === 'success') {
                    await fetchToServerDB(res.user.id) //should be using token
                    .then(data => procedures.existingUser(res, data, afterSignedIn))
                    .catch(() => procedures.newUser(res, afterSignedUp))
                } else {
                    console.log('cancelled')
                }
            })
            .catch(err => console.log(err))           

        },
        
        signOut : () => {
            //find out how to signout
            //delete token
            setUser({})
            setAuthState('guest')
            setIsNew(false)
        }
    }

    useEffect(() => {
        const syncSession = async () => {
            storeToken.delete() //sementara, always reset token
            const savedToken = await storeToken.get()
            if (savedToken) procedures.continueSession('113814096624824806623')
            else console.log('no token stored')
        }

        syncSession()
    }, [])

    useEffect(() => {
        
        console.log(showAuthArea ? 'true' : 'false')
    }, [showAuthArea])

    return (
        <AuthContext.Provider value={{
            authState,
            accessToken,
            user,
            isNew,
            errorAuth,
            setErrorAuth,
            authMethods,
            showAuthArea,
            setShowAuthArea,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)