import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type FetchedMovieType = {
  adult: boolean
  backdrop_path: string
  genere_id: object[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type InitialStateType = {
  movies: FetchedMovieType[]
}

const initialState: InitialStateType = {
  movies: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
})
