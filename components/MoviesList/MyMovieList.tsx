import { FlatList, StyleSheet, View } from 'react-native'
import { MovieItem } from './MovieItem'
import { theme } from '../../constants/theme'
import { useAppSelector } from '../../store/store'
import { selectMyList } from '../../store/myListSlcie'
import { Text } from 'react-native-paper'

export const MyMovieList = () => {
  const data = useAppSelector(selectMyList)

  return (
    <View style={styles.background}>
      {data.length === 0 ? (
        <Text style={styles.info}>Your list is empty.</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={({ item }) => <MovieItem movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    minHeight: '100%',
    backgroundColor: theme.color.primary,
  },
  container: {
    paddingHorizontal: 25,
    gap: 18,
    paddingBottom: 260,
    paddingTop: 30,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 30,
  },
})
