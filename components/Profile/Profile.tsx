import { StyleSheet, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../constants/theme'
import { Link } from '../Link'

export const Profile = () => (
  <View style={styles.container}>
    <Image source={require('../../assets/prof.jpg')} alt='my profile' style={styles.image} />
    <View style={styles.linksContainer}>
      <Link
        url='https://github.com/SquinFester'
        icon={<AntDesign name='github' size={24} color={theme.color.text} />}
        text='SquinFester'
      />
      <Link
        url='https://www.linkedin.com/in/bartosz-przymencki-802620258'
        icon={<AntDesign name='linkedin-square' size={24} color='white' />}
        text='Bartosz Przymencki'
      />
      <Link
        url='https://www.instagram.com/bartek.oooo'
        icon={<AntDesign name='github' size={24} color={theme.color.text} />}
        text='@bartek.oooo'
      />
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
    borderWidth: 10,
    borderColor: '#1d244ede',
  },
  linksContainer: {
    display: 'flex',
    gap: 15,
  },
})
