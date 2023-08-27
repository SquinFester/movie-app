import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { Container } from '../components/Container'
import { ApiInfo } from '../components/Profile/ApiInfo'
import { Profile } from '../components/Profile/Profile'

export const ProfileScreen = () => (
  <Container>
    <View style={styles.imageContainer}>
      <Image source={require('../assets/disneylogo.png')} alt='logo' style={{ width: 180, height: 80 }} />
    </View>
    <Profile />
    <View style={styles.infoContainer}>
      <Text style={styles.text}>Inspired by The Walt Disney Company.</Text>
      <ApiInfo />
      <Text style={styles.text}>© Przymencki • {new Date().getFullYear()}</Text>
    </View>
  </Container>
)

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
    gap: 5,
  },
  text: {
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
})
