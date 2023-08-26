import { Navigation } from './navigation/Navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ModalProvider } from './components/Modal/ModalProvider'

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <ModalProvider>
          <Navigation />
        </ModalProvider>
      </Provider>
    </PaperProvider>
  )
}
