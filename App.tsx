import { Navigation } from './navigation/Navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PaperProvider>
  )
}
