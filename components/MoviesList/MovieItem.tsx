import { StyleSheet, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useAppDispatch } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'
import { ActivityIndicator } from 'react-native-paper'
import { theme } from '../../constants/theme'
import { FetchedImage } from '../FetchedImage'

type MovieItemType = {
  movie: FetchedMovieType
  isLoading: boolean
}

export const MovieItem = ({ movie, isLoading }: MovieItemType) => {
  const dispatch = useAppDispatch()

  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => dispatch(setMovieId(movie.id))}
      rippleColor='rgba(255, 255, 255, .32)'
    >
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} color={theme.color.text} />
        </View>
      ) : (
        <FetchedImage
          source={movie.poster_path}
          alt={`${movie.title}'s poster`}
          resizeMode='contain'
          imageStyles={{ height: 240, width: 160 }}
        />
      )}
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    height: 235,
    borderRadius: 5,
    overflow: 'hidden',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
