import { SafeAreaView, StyleSheet, Text } from 'react-native'

export const Topbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Przymencki+</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  logo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
})
