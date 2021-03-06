import React from 'react'
import { View, Text, Pressable, Platform, Image, ActivityIndicator } from 'react-native'
import { css } from '@emotion/native'
import c from '../../core/style/theme.style'
import * as Haptics from 'expo-haptics'

export default RaisedButton = (props) => {
    const pressHandler = () => {
        if (Platform.OS === "ios") {
            if (props.haptics === 'low') Haptics.selectionAsync()
            else Haptics.notificationAsync('success')
        }
        props.onPress()
    }

    return (
        <View style={[styles.container, props.style, props.wide ? { width: '90%' } : '']}>
            <View style={[styles.wall, props.icon ? styles.clearance : '', { backgroundColor: props.color ? props.color : c.red }, props.wide ? { width: '100%' } : '']}><Content {...props} hide /></View>
            <View style={[styles.wall, styles.layer, props.icon ? styles.clearance : '', props.wide ? { width: '100%' } : '']}><Content {...props} hide /></View>
            <Pressable
                style={({ pressed }) => [styles.main, pressed ? styles.pressed : '', props.icon ? styles.clearance : '', { backgroundColor: props.color ? props.color : c.red }]}
                onPress={pressHandler}
            >
                <Content {...props} />
            </Pressable>
        </View>
    )
}

const Content = ({ iconsrc, size, children, icon, hide, wide, loading, shallow }) => (
    <View style={[styles.wrap, hide ? { opacity: 0 } : '']}>
        {loading && (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator color={c.white} />
            </View>
        )}
        <View style={[styles.wrap, loading ? styles.hide : '']}>
            {iconsrc && <Image source={iconsrc} style={styles.icon({ size })} />}
            {icon}
            <Text style={styles.text({ size, iconsrc, icon, wide, shallow })}>{children}</Text>
        </View>
    </View>
)

const styles = {
    container: css`
        position: relative;
        display: flex;
    `,
    wrap: css`
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    main: css`
        position: relative;
        background: ${c.red};
        border-radius: 8px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    pressed: css`
        top: 2px;
    `,
    icon: ({ size }) => css`
        position: relative;
        width: ${(size * 2).toString()}px;
        height: ${(size * 2).toString()}px;
        margin: 6px 0 6px 8px;
    `,
    spinnerContainer: css`
        position: absolute;
    `,
    hide: css`
        opacity: 0;
    `,
    wall: css`
        position: absolute;
        background: ${c.red};
        border-radius: 8px;
        top: 5px;
        flex-direction: row;
        align-items: center;
    `,
    layer: css`
        background: #0003;
    `,
    clearance: css`
        padding-left: 12px;
        justify-content: flex-start;
    `,
    text: ({ iconsrc, icon, size, wide, shallow }) => css`
        font-family: Poppins_6;
        color: white;
        font-weight: 600;
        font-size: ${(Platform.OS === 'android' ? size - 2 : size).toString()}px;
        margin:  ${Platform.OS === 'android' ? shallow ? '2px' : '8px' : shallow ? '6px' : '12px'} ${iconsrc || icon ? '14px' : '18px'};
        ${Platform.OS === 'android' ? 'padding-top: 4px;' : ''}
        ${wide ? 'flex: 1; text-align: center;' : ''}
    `
}
