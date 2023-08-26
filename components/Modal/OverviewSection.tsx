import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export const OverviewSection = ({ overview }: { overview: string }) => {
  const [isReadMore, setIsReadMore] = useState(false)
  return (
    <Text style={styles.text}>
      {isReadMore || overview.length < 100 ? (
        overview
      ) : (
        <>
          {`${overview.substring(0, 100)}...`}
          <Text onPress={() => setIsReadMore(true)} style={styles.readMore}>
            Read more
          </Text>
        </>
      )}
    </Text>
  )
}

const styles = StyleSheet.create({
  readMore: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(208, 188, 255)',
    color: 'rgb(208, 188, 255)',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
})
