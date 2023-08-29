import { useState, useRef } from 'react'
import { FlatList, Platform, StyleSheet, View, useWindowDimensions } from 'react-native'
import { useGetMoviesQuery } from '../../api/moviesApi'
import { MovieItem } from './MovieItem'
import { theme } from '../../constants/theme'
import { useScrollToTop } from '@react-navigation/native'

export const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { height } = useWindowDimensions()
  const { data, isFetching } = useGetMoviesQuery(currentPage)
  const ref = useRef(null)
  useScrollToTop(ref)
  const styles = getStyles(height)

  return (
    <View style={styles.background}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => <MovieItem movie={item} isLoading={isFetching} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setCurrentPage((prev) => prev + 1)}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.container}
        ref={ref}
      />
    </View>
  )
}

const getStyles = (height: number) => {
  const styles = StyleSheet.create({
    background: {
      minHeight: height,
      backgroundColor: theme.color.primary,
    },
    container: {
      paddingHorizontal: Platform.OS === 'android' ? 10 : 25,
      gap: 18,
      paddingBottom: Platform.OS === 'android' ? 280 : 260,
      paddingTop: 30,
    },
    columnWrapperStyle: {
      justifyContent: 'space-between',
      gap: Platform.OS === 'android' ? 18 : 0,
    },
  })
  return styles
}
