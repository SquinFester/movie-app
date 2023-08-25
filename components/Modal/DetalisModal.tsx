import { Card, Modal, Portal, Text } from 'react-native-paper'
import { useAppDispatch } from '../../store/store'
import { setMovieId } from '../../store/movieIdSlice'
import { useGetDetailsQuery } from '../../api/moviesApi'
import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

export const DetalisModal = ({ movieId }: { movieId: number }) => {
  const [isReadMore, setIsReadMore] = useState(false)

  const dispatch = useAppDispatch()
  const { data } = useGetDetailsQuery(movieId)
  if (!data?.poster_path) return null
  console.log(data)

  return (
    <Portal>
      <Modal visible onDismiss={() => dispatch(setMovieId(null))}>
        <Card style={styles.container}>
          <AntDesign
            name='close'
            size={24}
            color='#fff'
            style={styles.closeIcon}
            onPress={() => dispatch(setMovieId(null))}
          />
          <View style={styles.imageContainer}>
            <Card.Cover
              source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
              resizeMode='cover'
              style={styles.image}
            />
            <LinearGradient colors={['transparent', 'rgb(30,36,66)']} style={styles.gradient} />
          </View>
          <Card.Content>
            <Text variant='titleLarge' style={styles.title}>
              {data.title}
            </Text>

            <View style={styles.rate}>
              <Text>votes: {data.vote_count}</Text>
              <View style={styles.seperator} />
              <Text>{data.vote_average.toFixed(1)}</Text>
              <FontAwesome name='star-o' size={14} color='#fff' style={{ marginLeft: 5 }} />
            </View>

            <Text variant='bodyMedium'>
              {isReadMore || data.overview.length < 100 ? (
                data.overview
              ) : (
                <>
                  {data.overview.substring(0, 100)}
                  <Text>...</Text>
                  <Text onPress={() => setIsReadMore(true)} style={styles.readMore}>
                    Read more
                  </Text>
                </>
              )}
            </Text>
            <View style={styles.description}>
              <Text>popularity: {data.popularity}</Text>

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.production_companies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                contentContainerStyle={{ flexWrap: 'wrap', width: 300 }}
              />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.production_countries}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                contentContainerStyle={{ flexWrap: 'wrap', width: 300 }}
              />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data.genres}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                ItemSeparatorComponent={() => <View style={styles.seperator} />}
                contentContainerStyle={{ flexWrap: 'wrap', width: 300 }}
              />
            </View>
          </Card.Content>
        </Card>
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
    maxHeight: 600,
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
  },
  imageContainer: {
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    borderRadius: 0,
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
    marginTop: 20,
  },
  readMore: {
    display: 'flex',
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'flex-end',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(208, 188, 255)',
    color: 'rgb(208, 188, 255)',
  },
  rate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 10,
  },
  seperator: {
    height: '100%',
    width: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
})
