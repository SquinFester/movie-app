import { Button, Card, Modal, Portal, Text } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'
import { useGetDetailsQuery } from '../../api/moviesApi'
import { ScrollView, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../constants/theme'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { FlatListWithSeparator } from '../FlatListWithSeparator'
import { OverviewSection } from './OverviewSection'
import { addMovie, removeMovie, selectMyList } from '../../store/myListSlcie'

export const DetalisModal = ({ movieId }: { movieId: number }) => {
  const dispatch = useAppDispatch()
  const { data } = useGetDetailsQuery(movieId)
  const myList = useAppSelector(selectMyList)
  if (!data?.poster_path) return
  const isOnList = myList.filter((i) => i.id === movieId).length > 0
  return (
    <Portal>
      <Modal visible onDismiss={() => dispatch(setMovieId(null))}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style={styles.container}>
            <View style={styles.closeIcon}>
              <AntDesign name='close' size={18} color={theme.color.text} onPress={() => dispatch(setMovieId(null))} />
            </View>
            <View style={styles.imageContainer}>
              <Card.Cover
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path ? data.backdrop_path : data.poster_path}`,
                }}
                resizeMode='cover'
                alt={`${data.title}'s poster`}
                style={styles.image}
              />
              <LinearGradient colors={['transparent', 'rgb(30,36,66)']} style={styles.gradient} />
            </View>
            <Card.Content style={styles.mainSection}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.flex}>
                <View>
                  <Text style={styles.text}>Popularity: {data.popularity}</Text>
                </View>
                <View style={styles.rate}>
                  <Text style={styles.text}>Votes: {data.vote_count}</Text>
                  <Text style={styles.text}>•</Text>
                  <Text style={styles.text}>{data.vote_average.toFixed(1)}</Text>
                  <FontAwesome name='star-o' size={14} color='#fff' />
                </View>
              </View>
              <View>
                <FlatListWithSeparator data={data.genres} />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => {
                    isOnList ? dispatch(removeMovie(data)) : dispatch(addMovie(data))
                  }}
                  style={styles.button}
                >
                  <AntDesign name={isOnList ? 'checkcircleo' : 'pluscircleo'} size={16} color={theme.color.primary} />
                  <Text style={styles.buttonLabel}> My List</Text>
                </Button>
              </View>
              <OverviewSection overview={data.overview} />
              <View style={styles.description}>
                <FlatListWithSeparator data={data.production_companies} />
                <View style={styles.createdIn}>
                  <Text>{new Date(data.release_date).getFullYear()}</Text>
                  <Text>•</Text>
                  <FlatListWithSeparator data={data.production_countries} />
                </View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    position: 'relative',
    backgroundColor: theme.color.primary,
    overflow: 'scroll',
  },
  mainSection: {
    display: 'flex',
    gap: 15,
  },
  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 100,
    padding: 5,
    borderRadius: 9999,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    zIndex: 100,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
  createdIn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '60%',
  },
  buttonLabel: {
    color: theme.color.primary,
    fontSize: 16,
    fontWeight: '600',
  },
})
