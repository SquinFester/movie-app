import { Navigation } from './navigation/Navigation'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { moviesApi } from './api/moviesApi'

export default function App() {
  return (
    <ApiProvider api={moviesApi}>
      <Navigation />
    </ApiProvider>
  )
}
