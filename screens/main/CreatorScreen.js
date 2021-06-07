import React from 'react'
import { css } from '@emotion/native'
import { View, Text, TextInput } from 'react-native'
import { Pressable } from 'react-native'

const CreatorScreen = () => {
	const [judul, setJudul] = React.useState(null);
	const [deskripsi, setDeskripsi] = React.useState(null);
	const [kontakPerson, setKontak] = React.useState(null);

	return (
		<View style={styles.screen}>
			<Text>Buat Laporan</Text>
			<View style={styles.body}>
				<Text>ID Laporan</Text>
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
					<Pressable
						onPress={() => {
						}}>
						<Text>Unggah gambar</Text>
					</Pressable>
				</View>
				<TextInput
					style={styles.input}
					onChangeText={setKontak}
					value={kontakPerson}
					placeholder="Kontak yang bisa dihubungi"
				/>
				<Text>Email Pelapor</Text>
				<View>
					<Text>Jumlah Vote</Text>
					<Text>Status</Text>
				</View>
				<Text>Datetime</Text>
			</View>
			{/* <TextInput
                style={styles.input}
                onChangeText={checkUsername}
                value={username}
                placeholder="Pilih Username"
                onBlur={() => {
                    setInvalidUsername(validateUsername(username))
                    setWarnMinimal(true)
                }}
            /> */}
		</View>
	)
}

export default CreatorScreen

const styles = {
	screen: css`
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 40px;
    `,
	body: css`
        padding: 20px;
        width: 100%;
    `,
	input: css`
        font-family: Slab_4;
        font-size: 24px;
        border-bottom-width: 2px;
        width: 100%;
        padding: 8px 0;
    `,
	gambar: css`
		width: 100%;
	`,
	gambarSection: css`
		width: 100%;
	`
}
