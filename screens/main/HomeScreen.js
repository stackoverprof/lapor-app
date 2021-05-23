import React from 'react'
import { css } from '@emotion/native'
import { View, ScrollView } from 'react-native'
import Header from '../../components/home/Header'
import ReportCard from '../../components/home/ReportCard'
import c from './../../core/style/theme.style';

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <Header />
                {sample.map((item, i) => (
                    <ReportCard img={item.img} title={item.title} date={item.date} key={i} />
                ))}
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = {
    screen: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        background: ${c.white};
        width: 100%;
    `,
    scrollview: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        flex: 1;
    `,
}

const sample = [
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
]