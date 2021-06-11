import React from 'react'
import { css } from '@emotion/native'
import { View, Text, TextInput } from 'react-native'
import c from './../../core/style/theme.style'
import Graybutton from '../../components/atomic/GrayButton'
import { useAuth } from './../../core/contexts/AuthContext'

const CreatorScreen = () => {
	const [judul, setJudul] = React.useState(null);
	const [deskripsi, setDeskripsi] = React.useState(null);
	const [kontakPerson, setKontak] = React.useState(null);
	const { user } = useAuth()

	return (
		<View style={styles.screen}>
			<View style={styles.body}>
				<View style={styles.upper}>
					<Text style={styles.id}>ID Laporan</Text>
					<TextInput
						style={styles.input}
						onChangeText={setJudul}
						value={judul}
						placeholder="Judul Laporan"
					/>
					<TextInput
						style={styles.input}
						onChangeText={setDeskripsi}
						value={deskripsi}
						placeholder="Deskripsi Laporan"
					/>
					<View style={styles.gambar}>
						<View style={styles.gambarSection}></View>
						<GrayButton size={14} haptics="low" onPress={() => console.log('unggah gambar')}>
							Unggah
						</GrayButton>
					</View>
					<TextInput
						style={styles.input}
						onChangeText={setKontak}
						value={kontakPerson}
						placeholder="Kontak yang bisa dihubungi"
					/>
				</View>

				<View style={styles.lower}>
					<Text style={styles.email}>Email Pelapor</Text>
					<Text style={[styles.email, styles.user]}>{user.email}</Text>
					<RaisedButton
						onPress={() => {}}
						size={20}
						wide
					>
						Submit
					</RaisedButton>
																																							
				</View>
			</View>
		</View>
	)
}

export default CreatorScreen

const styles = {
	screen: css`
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
		padding-bottom: 20px;
    `,
	upper: css`
		width: 100%;
	`,
	lower: css`
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`,
	body: css`
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
        width: 92%;
		height: 100%;
		padding: 12px;
		margin-top: 24px;
		border-radius: 8px;
		border: 1px solid ${c.grayLight};
		background: ${c.white};
		box-shadow: 0 6px 0 ${c.grayLight}
    `,
	input: css`
        font-family: Slab_4;
        font-size: 20px;
        border-bottom-width: 2px;
        width: 100%;
        padding: 8px 0;
    `,
	id: css`
		font-family: Slab_7;
		margin: 0 auto;
		margin-bottom: 10px;
		font-weight: 900;
		color: ${c.red}
	`,
	gambar: css`
		width: 100%;
		justify-content: center;
		align-items: flex-end;
	`,
	gambarSection: css`
		width: 100%;
		height: 200px;
		margin-top: 20px;
		margin-bottom: 10px; 
		border-radius: 8px;
		border: 1px solid ${c.grayLight};
		background: ${c.grayDark};
		box-shadow: 0 6px 0 ${c.grayLight}
	`,
	email: css`
		font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
        font-family: Slab_7;	
		margin-top: 16px;
		textAlign: center;
	`,
	user: css`
		color: red;
		margin-top: 4px;
		margin-bottom: 8px;
	`,
}