import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { SearchItem } from './SearchItem'

type SearchResultsProps = {
  data?: FetchedMovieType[]
  query: string
  isLoading: boolean
}

export const SearchList = ({ data, query, isLoading }: SearchResultsProps) => {
  const resultNotFound = query && data?.length === 0
  return (
    <View style={styles.container}>
      {resultNotFound ? (
        <Text style={styles.text}>{isLoading ? 'Loading...' : "can't find"}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SearchItem movie={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  list: {
    marginHorizontal: 20,
    gap: 20,
    paddingBottom: 120,
  },
})
