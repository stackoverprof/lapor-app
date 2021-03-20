import React from 'react'
import { View, Text, Pressable, Platform, Image } from 'react-native'
import { css } from '@emotion/native'
import c from '../../core/style/theme.style'
import * as Haptics from 'expo-haptics'

const RaisedButton = (props) => {
    const pressHandler = () => {
        if (Platform.OS === "ios") Haptics.selectionAsync()
    }

    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.wall, props.icon ? styles.clearance : '']}><Content {...props}/></View>
            <Pressable 
                style={({pressed}) => [pressed ? styles.pressed : '', styles.main, props.icon ? styles.clearance : '']}
                onPress={pressHandler}
            >
                <Content {...props}/>
            </Pressable>
        </View>
    )
}

const Content = ({iconsrc, size, children, icon}) => (
    <>
        {iconsrc && <Image source={iconsrc} style={styles.icon({size})} />}
        {icon}
        <Text style={styles.text({size, iconsrc, icon})}>{children}</Text>
    </>
)

export default RaisedButton

const styles = {
    container: css`
        position: relative;
        display: flex;
    `,
    main: css`
        position: relative;
        background: ${c.red};
        border-radius: 8px;
        flex-direction: row;
        align-items: center;
    `,
    pressed: css`
        top: 2px;
    `,
    icon: ({size}) => css`
        position: relative;
        width: ${(size*2.3).toString()}px;
        height: ${(size*2.3).toString()}px;
        margin: 8px 0 8px 8px;
    `,
    wall: css`
        position: absolute;
        background: ${c.redDark};
        border-radius: 8px;
        top: 5px;
        flex-direction: row;
    `,
    clearance: css`
        padding-left: 12px;
        justify-content: flex-start;
    `,
    text: ({iconsrc, icon, size}) => css`
        font-family: Poppins_600SemiBold;
        color: white;
        font-weight: 600;
        font-size: ${size.toString()}px;
        margin: 12px ${iconsrc || icon ? '14px' : '18px'};
    `
}
  