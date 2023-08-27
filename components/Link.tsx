import React, { useCallback } from 'react'
import { Alert, Linking, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

type OpenURLButtonProps = {
  url: string
  icon: React.ReactNode
  text: string
}

export const Link = ({ url, icon, text }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return (
    <Text onPress={handlePress} style={styles.text}>
      {icon} {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
})
