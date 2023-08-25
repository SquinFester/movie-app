import { StyleSheet, Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useAppDispatch } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'

type MovieItemType = {
  movie: FetchedMovieType
}

export const MovieItem = ({ movie }: MovieItemType) => {
  const dispatch = useAppDispatch()

  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => dispatch(setMovieId(movie.id))}
      rippleColor='rgba(255, 255, 255, .32)'
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        alt={`${movie.title}'s poster`}
        resizeMode='contain'
        style={styles.image}
      />
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    height: 235,
    width: '46%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
