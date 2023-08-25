import { useGetDetailsQuery, useGetMoviesQuery, useSearchMovieQuery } from '../api/moviesApi'
import { Container } from '../components/Container'
import { FlatList, Text } from 'react-native'
import { Topbar } from '../components/Topbar'
import { useState } from 'react'

export const HomeScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useGetMoviesQuery(currentPage)
  const { data: details } = useGetDetailsQuery(569094)
  console.log(details)
  const { data: title } = useSearchMovieQuery('spider')
  console.log(title)

  return (
    <Container>
      <Topbar />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={{ color: '#fff', height: 30, marginVertical: 40 }}>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => setCurrentPage((prev) => prev + 1)}
      />
    </Container>
  )
}
