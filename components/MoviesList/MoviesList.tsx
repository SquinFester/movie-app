import { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useGetMoviesQuery } from '../../api/moviesApi'
import { MovieItem } from './MovieItem'
import { DetalisModal } from '../Modal/DetalisModal'
import { useAppSelector } from '../../store/store'

export const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useGetMoviesQuery(currentPage)
  const movieId = useAppSelector((state) => state.movieId.movieId)

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setCurrentPage((prev) => prev + 1)}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.container}
      />
      {movieId ? <DetalisModal movieId={movieId} /> : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    gap: 20,
  },
})
