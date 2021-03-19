import React from 'react'
import { View, Text, Pressable, Platform } from 'react-native'
import button from '../../core/style/button.style'
import * as Haptics from 'expo-haptics'

const RaisedButton = () => {
    const pressHandler = () => {
        if (Platform.OS === "ios") Haptics.selectionAsync()
    }

    return (
        <View style={button.container}>
            <View style={button.wall}><Text style={button.text}>Sign In</Text></View>
            <Pressable 
                style={({pressed}) => [pressed ? button.pressed : '', button.main]}
                onPress={pressHandler}
                activeOpacity={0}
            >
                <Text style={button.text}>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default RaisedButton
