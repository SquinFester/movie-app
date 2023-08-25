import { Navigation } from './navigation/Navigation'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { moviesApi } from './api/moviesApi'
import { Provider } from 'react-native-paper'

export default function App() {
  return (
    <ApiProvider api={moviesApi}>
      <Provider>
        <Navigation />
      </Provider>
    </ApiProvider>
  )
}
