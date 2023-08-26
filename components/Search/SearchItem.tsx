import { View, StyleSheet } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { useAppDispatch } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'
import { FetchedImage } from '../FetchedImage'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'

export const SearchItem = ({ movie }: { movie: FetchedMovieType }) => {
  const dispatch = useAppDispatch()
  return (
    <TouchableRipple rippleColor='rgba(255, 255, 255, .32)' onPress={() => dispatch(setMovieId(movie.id))}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FetchedImage
            source={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}
            alt={`${movie.title}'s poster`}
          />
          <LinearGradient
            colors={['transparent', 'rgb(30,36,66)']}
            start={{ x: 0.6, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>
            {movie.title.substring(0, 35)}
            {movie.title.length > 35 && '...'}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>
            Votes: {movie.vote_count} • {movie.vote_average.toFixed(1)}{' '}
            <FontAwesome name='star-o' size={14} color='#fff' />
          </Text>
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
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
  },
  imageContainer: {
    position: 'relative',
    flex: 1,
  },
  descriptionContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
})
