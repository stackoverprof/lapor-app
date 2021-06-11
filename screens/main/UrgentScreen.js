import React from 'react'
import { css } from '@emotion/native'
import { View, Text, ScrollView } from 'react-native'
import UrgentCard from '../../components/home/UrgentCard'
import c from './../../core/style/theme.style';

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Kontak Darurat</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollview}>
                {contactList.map((item, i) => (
                    <UrgentCard title={item.title} contact={item.contact} key={i} />
                ))}
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = {
    screen: css`
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        paddingTop: 40px;
    `,
    header: css`
        width: 100%;
        padding: 10px 0;
    `, 
    titleText: css`
        font-size: ${Platform.OS === 'ios' ? '28px' : '26px'};
        font-family: Slab_7;
        textAlign: center;
        color: ${c.red}
    `,
    scrollview: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-width: 100%;
    `,
    }

const contactList = [
    {
        title: 'Polisi',
        contact: '110',
    },
    {
        title: 'Ambulans',
        contact: '119',
    },
    {
        title: 'Badan Nasional Pencarian dan Pertolongan',
        contact: '115',
    },
    {
        title: 'Posko Bencara Alam',
        contact: '129',
    },
    {
        title: 'Perusahaan Listrik Negara (PLN)',
        contact: '123',
    },
    {
        title: 'Pemadam Kebarakan',
        contact: '113',
    },
    {
        title: 'Nomor Darurat Telepon Seluler dan Satelit',
        contact: '112',
    },
    {
        title: 'Keracunan',
        contact: '(021) 4250767',
    },
    {
        title: 'Pencegahan Bunuh Diri',
        contact: '(021) 7256526',
    },
    {
        title: 'Direktorat Bina Pelayanan Kesehatan Jiwa',
        contact: 'Hotline 500-454',
    },
]