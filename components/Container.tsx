import { SafeAreaView, StyleSheet } from 'react-native'
import { theme } from '../constants/theme'

export const Container = ({ children }: { children: React.ReactNode }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.primary,
  },
})
