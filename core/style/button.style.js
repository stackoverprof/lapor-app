import { StyleSheet } from 'react-native'
import c from './theme.style'

export default button = StyleSheet.create({
    main: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      marginVertical: 10,
      borderRadius: 8,
      backgroundColor: c.red,
    },
    mainText: {
      color: c.white,
    },
    mainWall: {
      backgroundColor: c.redDark,
      height: 20,
      position: 'relative',
      top: 20,
    }
})
