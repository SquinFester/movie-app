import { View, StyleSheet } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { useAppDispatch } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'
import { FetchedImage } from '../FetchedImage'

export const SearchItem = ({ movie }: { movie: FetchedMovieType }) => {
  const dispatch = useAppDispatch()
  return (
    <TouchableRipple rippleColor='rgba(255, 255, 255, .32)' onPress={() => dispatch(setMovieId(movie.id))}>
      <View style={styles.container}>
        <FetchedImage
          source={movie.backdrop_path}
          alt={`${movie.title}'s poster`}
          imageStyles={{
            width: '30%',
          }}
        />
        <View>
          <Text>{movie.title}</Text>
          <Text>{movie.popularity}</Text>
          <Text>{movie.vote_count}</Text>
        </View>
      </View>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 100,
  },
})
