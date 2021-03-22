import React, { useState } from 'react'
import RaisedButton from './RaisedButton'
import img_googleIcon from '../../assets/img/icons/google.png'
import { useAuth } from '../../core/contexts/AuthContext'

const GoogleButton = ({afterSignedUp, afterSignedIn}) => {
    const [loading, setLoading] = useState(false)
    const { authMethods } = useAuth()

    const handleLogin = async () => {
        setLoading(true)
        await authMethods.google({afterSignedUp, afterSignedIn})
        setLoading(false)
    }

    return (
        <RaisedButton 
            onPress={handleLogin}
            iconsrc={img_googleIcon} 
            size={20}
            loading={loading}
            wide
        >
            Sign In with Google
        </RaisedButton>
    )
}

export default GoogleButton
