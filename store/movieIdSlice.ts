import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

type InitialStateType = { movieId: number | null }

const initialState: InitialStateType = { movieId: null }

export const movieIdSlice = createSlice({
  name: 'movieId',
  initialState,
  reducers: {
    setMovieId: (state, action: PayloadAction<number | null>) => {
      state.movieId = action.payload
    },
  },
})

export const { setMovieId } = movieIdSlice.actions
export const selectMovieId = (state: RootState) => state.movieId.movieId
export default movieIdSlice.reducer
