import React, { useCallback } from 'react'
import { Alert, Linking } from 'react-native'
import { Text } from 'react-native-paper'

type OpenURLButtonProps = {
  url: string
  children: React.ReactNode
}

export const Link = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return <Text onPress={handlePress}>{children}</Text>
}
