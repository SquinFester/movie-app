import { Container } from '../components/Container'
import { Text, StyleSheet } from 'react-native'
import { MoviesList } from '../components/MoviesList/MoviesList'

export const HomeScreen = () => (
  <Container>
    <Text style={styles.logo}>Przymencki+</Text>
    <MoviesList />
  </Container>
)

const styles = StyleSheet.create({
  logo: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 20,
  },
})
