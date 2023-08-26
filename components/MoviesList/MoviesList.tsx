import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useGetMoviesQuery } from '../../api/moviesApi'
import { MovieItem } from './MovieItem'

export const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isFetching } = useGetMoviesQuery(currentPage)

  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    gap: 20,
  },
})
