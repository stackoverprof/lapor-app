import React, { useContext, useEffect, useState } from 'react'
import * as Google from 'expo-google-app-auth'
import * as SecureStore from 'expo-secure-store'

const AuthContext = React.createContext()

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

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState('initial')
    const [accessToken, setAccessToken] = useState('')
    const [user, setUser] = useState({})
    const [isNew, setIsNew] = useState(false)
    const [errorAuth, setErrorAuth] = useState('')

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
        newUser: async (res, navigation) => {
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
            navigation.push('RegistrationScreen')
        },
        existingUser: async (res, data) => {
            console.log('existing')
            setIsNew(false)
            setUser(data)
            await storeToken.save(res.accessToken)
            setAccessToken(res.accessToken)
            setAuthState('user')
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
        google : async ({navigation}) => {
            
            Google.logInAsync({
                androidClientId: '864888909882-l3iqtf3947l9nb2s3bgh12gkkat2citv.apps.googleusercontent.com',
                iosClientId: '864888909882-52dg581j3mac0l5oigutmfscndpdc95a.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            })
            .then(async res => {
                if (res.type === 'success') {
                    await fetchToServerDB(res.user.id) //should be using token
                    .then(data => procedures.existingUser(res, data))
                    .catch(() => procedures.newUser(res, navigation))
                } else {
                    return console.log('cancelled')
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
            storeToken.delete()
            const savedToken = await storeToken.get()
            if (savedToken) procedures.continueSession('113814096624824806623')
        }

        syncSession()
    }, [])

    useEffect(() => {
        console.log('token: ' + accessToken)
    }, [accessToken])

    return (
        <AuthContext.Provider value={{
            authState,
            accessToken,
            user,
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