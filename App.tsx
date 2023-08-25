import { useEffect } from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { API_KEY } from '@env'

export default function App() {
  useEffect(() => {
    // const a = async () => {
    //   try {
    //     const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    //     // https://image.tmdb.org/t/p/w500
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // a()
  }, [])

  return (
    <Provider store={store}>
      <Topbar />
      <Navigation />
    </Provider>
  )
}
