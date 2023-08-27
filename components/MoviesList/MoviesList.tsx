import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useGetMoviesQuery } from '../../api/moviesApi'
import { MovieItem } from './MovieItem'
import { theme } from '../../constants/theme'

export const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isFetching } = useGetMoviesQuery(currentPage)

  return (
    <View style={styles.background}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <MovieItem movie={item} isLoading={isFetching} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setCurrentPage((prev) => prev + 1)}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.color.primary,
  },
  container: {
    paddingHorizontal: 25,
    gap: 18,
    paddingBottom: 260,
    paddingTop: 30,
  },
})
