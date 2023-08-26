import { useState } from 'react'
import { Container } from '../components/Container'
import { useDebounce } from '@uidotdev/usehooks'
import { useSearchMovieQuery } from '../api/moviesApi'
import { StyleSheet, View } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import { theme } from '../constants/theme'
import { TextInput } from 'react-native-paper'
import { SearchList } from '../components/Search/SearchList'

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const { data, isFetching } = useSearchMovieQuery(debouncedSearchQuery)

  return (
    <Container>
      <View style={styles.searchBar}>
        <View style={styles.glassIcon}>
          <Foundation name='magnifying-glass' size={28} color={theme.color.text} />
        </View>
        <TextInput
          placeholder='Search'
          style={styles.input}
          autoFocus
          activeUnderlineColor='transparent'
          textColor='black'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.nativeEvent.text)}
          allowFontScaling
        />
      </View>
      <SearchList data={data} query={debouncedSearchQuery} isLoading={isFetching} />
    </Container>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 15,
    position: 'relative',
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    height: 50,
    paddingLeft: 30,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  glassIcon: {
    position: 'absolute',
    zIndex: 100,
    left: 15,
    top: 0,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
