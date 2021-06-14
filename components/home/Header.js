import React from 'react'
import axios from 'axios'
import { css } from '@emotion/native'
import { View, Image, Text, Platform } from 'react-native'
import RaisedButton from '../../components/atomic/RaisedButton'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import { useAuth } from '../../core/contexts/AuthContext'

// email: 'rbintang.bagus11@gmail.com',
// display_name: 'errbin',
// uid: '42030iefjowekfn',
// photo_url: 'http://jenkgje.vom',
// kontak: '9i841093840931840319',
// alamat: 'iugihgidfjnn gk1/350'

const Header = () => {
	const { idToken } = useAuth()

	const tryFetch = async () => {
		console.log('ini token : ' + idToken);
		await axios.post('https://node-mongo-pjpb.herokuapp.com/buat-laporan', sample[2], {
			headers: {
				authorization: 'Bearer ' + idToken,
				platform: Platform.OS
			}
		})
			.then(response => console.log(response.data))
	}

	return (
		<View style={styles.head}>
			<Image source={require('../../assets/img/illus/mega.png')} style={styles.megaphone} />
			<View style={styles.content}>
				<Text style={styles.text1}>Laporan Terkini</Text>
				<RaisedButton shallow size={16} onPress={tryFetch} icon={<IconFA5 name="plus" size={20} color={'#FFF'} />}>
					Laporkan!
                </RaisedButton>
			</View>
		</View>
	)
}

const sample = [
	{
		gambar: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg',
		title: 'Diduga maling, dikejar warga 20km',
		datetime: '11.07 - 16 Maret',
		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
	{
		gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_BO2hKOHWRBNGmTPnLSvo9Rz6wGOgxT3XWshHEEy2s4otRCkuUpX9ZjOkiTuTkhzAkU&usqp=CAU',
		title: 'Anak balita hilang, tolong cariin',
		datetime: '11.07 - 16 Maret',

		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
	{
		gambar: 'https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/photo/gridoto/2018/01/28/3055710576.jpg',
		title: 'Pencurian motor di daerah apa',
		datetime: '11.07 - 16 Maret',

		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
	{
		gambar: 'https://picture-origin.rumah123.com/news-content/img/2018/10/03144309/GettyImages-531203253.jpg',
		title: 'Sial. Perampokan di rumah',
		datetime: '11.07 - 16 Maret',

		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
	{
		gambar: 'https://pbs.twimg.com/profile_images/1234180267385839616/tEfvr0zp_200x200.jpg',
		title: 'Anak hilang tapi dah dewasa',
		datetime: '11.07 - 16 Maret',

		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
	{
		gambar: 'https://4.bp.blogspot.com/-9xs6y6hU-KI/VzHzHzF9PaI/AAAAAAAAABk/nm_yX5QNey01fekVT9YGGZiFo1wyQPXOACLcB/s1600/6300137_201507190747090460.png',
		title: 'Seorang pria menikahi tiang',
		datetime: '11.07 - 16 Maret',

		deskripsi: 'nfkjnbksdjfn kjbnkjfnbk  fjbnd nk djfn dfkjn dfng dgn djfnjkdf gljdn fgnd fnldn flknd',
		kontak_person: '09485098403',
		jml_vote: 0,
		email_pelapor: 'bfjsbd@gmai.moc',
		status: false,
	},
]

const styles = {
	head: css`
        width: 100%;
        padding: 12px 0;
        flex-direction: row; 
        margin-top: 48px;     
        min-width: 92%;
    `,
	text1: css`
        font-size: ${Platform.OS === 'ios' ? '28px' : '26px'};
        font-family: Slab_7;
    `,
	megaphone: css`
        height: 100px;
        width: 100px;
        margin-right: 12px;
        border-radius: 6px;
    `,
	content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 8px;
        padding-top: ${Platform.OS === 'ios' ? '12px' : '8px'};
    `,
}

export default Header