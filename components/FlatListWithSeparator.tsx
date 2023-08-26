import { FlatList } from 'react-native'
import { Text } from 'react-native-paper'

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
        <Text>{item.name}</Text>
        {index === data.length - 1 ? null : <Text>•</Text>}
      </>
    )}
    columnWrapperStyle={{ flexWrap: 'wrap', gap: 5 }}
    numColumns={5}
  />
)
