import { Text } from 'react-native-paper'
import { Container } from '../components/Container'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet } from 'react-native'
import { MoviesList } from '../components/MoviesList/MoviesList'
import { theme } from '../constants/theme'
import { MyMovieList } from '../components/MoviesList/MyMovieList'

const MovieListTab = createMaterialTopTabNavigator()

export const HomeScreen = () => (
  <Container>
    <Text style={styles.logo}>PRZYMENCKI+</Text>
    <MovieListTab.Navigator
      pagerStyle={{ backgroundColor: theme.color.primary }}
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.color.primary },

        tabBarIndicatorStyle: { backgroundColor: theme.color.text },
      }}
    >
      <MovieListTab.Screen
        name='Home'
        component={MoviesList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'white' : theme.color.text, fontSize: 18, fontWeight: '500' }}>Home</Text>
          ),
        }}
      />
      <MovieListTab.Screen
        name='My List'
        component={MyMovieList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'white' : theme.color.text, fontSize: 18, fontWeight: '500' }}>
              My List
            </Text>
          ),
        }}
      />
    </MovieListTab.Navigator>
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
