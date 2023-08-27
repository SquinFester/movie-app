import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { TMBDLogo } from './TMBDLogo'

export const ApiInfo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>This product uses the TMDB API but is not endorsed or certified by TMDB.</Text>
    <TMBDLogo width={200} height={50} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: 250,
    textAlign: 'justify',
  },
})
