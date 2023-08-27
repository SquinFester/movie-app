import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../constants/theme'
import { Link } from '../Link'

export const Profile = () => (
  <View style={styles.container}>
    <Image source={require('../../assets/prof.jpg')} alt='my profile' style={styles.image} />
    <View style={styles.linksContainer}>
      <Link url='https://github.com/SquinFester'>
        <Text style={styles.text}>
          <AntDesign name='github' size={24} color={theme.color.text} /> SquinFester
        </Text>
      </Link>
      <Link url='https://www.linkedin.com/in/bartosz-przymencki-802620258/'>
        <Text style={styles.text}>
          <AntDesign name='linkedin-square' size={24} color='white' /> Bartosz Przymencki
        </Text>
      </Link>
      <Link url='https://www.instagram.com/bartek.oooo'>
        <Text style={styles.text}>
          <AntDesign name='instagram' size={24} color={theme.color.text} /> @bartek.oooo
        </Text>
      </Link>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 9999,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  linksContainer: {
    display: 'flex',
    gap: 15,
  },
})
