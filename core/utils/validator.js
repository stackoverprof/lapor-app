export const validateUsername = (value) => {
    if (!value) {
        return 'Username tidak boleh kosong'
    } else if (value.length > 20) {
        return 'Maksimal 20 karakter'
    } else if (value.length < 4) {
        return 'Minimal 4 karakter'
    } else if (/(\s)/.test(value)) {
        return 'Jangan gunakan spasi'
    } else if (value.charAt(0) === '.' || value.charAt(0) === '_') {
        return 'Awali dengan huruf atau angka'
    } else if (value.charAt(value.length - 1) === '.') {
        return 'Jangan akhiri dengan titik'
    } else if (!/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,19}$/.test(value)) {
        return 'Gunakan huruf, angka atau . _'
    } else {
        return ''
    }
}

export const validateTelephone = (value) => {
    if (!value) {
        return 'Telepon tidak boleh kosong'
    } else {
        return ''
    }
}