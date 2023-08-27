import { FlatList, Platform, StyleSheet, View } from 'react-native'
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
          columnWrapperStyle={styles.columnWrapperStyle}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    minHeight: 800,
    backgroundColor: theme.color.primary,
  },
  container: {
    paddingHorizontal: Platform.OS === 'android' ? 10 : 25,
    gap: 18,
    paddingBottom: Platform.OS === 'android' ? 280 : 260,
    paddingTop: 30,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 30,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    gap: Platform.OS === 'android' ? 18 : 0,
  },
})
