import { FlatList, Text, StyleSheet } from 'react-native'
import { theme } from '../constants/theme'
import uuid from 'react-native-uuid'

type DataType = {
  id?: number
  name: string
}

type FlatListWithSeparatorProps = {
  data: DataType[]
}

export const FlatListWithSeparator = ({ data }: FlatListWithSeparatorProps) => (
  <FlatList
    showsHorizontalScrollIndicator={false}
    data={data}
    scrollEnabled={false}
    keyExtractor={(item) => (item.id ? item.id.toString() : uuid.v4().toString())}
    renderItem={({ item, index }) => (
      <>
        <Text style={styles.text}>{item.name}</Text>
        {index === data.length - 1 ? null : <Text style={styles.separator}>•</Text>}
      </>
    )}
    columnWrapperStyle={{ flexWrap: 'wrap' }}
    numColumns={5}
  />
)

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: theme.color.text,
  },
  separator: {
    fontSize: 14,
    color: theme.color.text,
    marginHorizontal: 5,
  },
})
