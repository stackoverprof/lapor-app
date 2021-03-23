import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'
import c from '../../core/style/theme.style'

const Foreword = () => {
    return (
        <View style={styles.containerLeft}>
            <Text style={styles.intro}>
                Tindak kejahatan
                {'\n'}
                ada di mana-mana.
                {'\n'}
                <Text style={styles.intro_bold}>
                    <Text style={styles.intro_red}>Laporkan!{' '}</Text>saat
                    {'\n'}
                    Anda menemuinya.
                </Text>
            </Text>
        </View>
    )
}

export default Foreword

const styles = {
    containerLeft: css`
        width: 100%;
        padding: 0 36px;
        justify-content: flex-start;
    `,
    intro: css`
        font-family: Slab_4;
        font-size: 24px;
        max-width: 80%;
    `,
    intro_bold: css`
        font-family: Slab_7;
    `,
    intro_red: css`
        color: ${c.red}
    `,
}
