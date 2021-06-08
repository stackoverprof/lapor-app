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
        min-width: 100%;
        padding-bottom: 24px;
    `,
}

const sample = [
    {
        img: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
        title: 'Diduga maling, dikejar warga 20km',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_BO2hKOHWRBNGmTPnLSvo9Rz6wGOgxT3XWshHEEy2s4otRCkuUpX9ZjOkiTuTkhzAkU&usqp=CAU',
        title: 'Anak balita hilang, tolong cariin',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/photo/gridoto/2018/01/28/3055710576.jpg',
        title: 'Pencurian motor di daerah apa',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://picture-origin.rumah123.com/news-content/img/2018/10/03144309/GettyImages-531203253.jpg',
        title: 'Sial. Perampokan di rumah',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1234180267385839616/tEfvr0zp_200x200.jpg',
        title: 'Anak hilang tapi dah dewasa',
        date: '11.07 - 16 Maret',
    },
    {
        img: 'https://4.bp.blogspot.com/-9xs6y6hU-KI/VzHzHzF9PaI/AAAAAAAAABk/nm_yX5QNey01fekVT9YGGZiFo1wyQPXOACLcB/s1600/6300137_201507190747090460.png',
        title: 'Seorang pria menikahi tiang',
        date: '11.07 - 16 Maret',
    },
]