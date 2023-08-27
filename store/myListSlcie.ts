import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

type InitialStateType = {
  myList: MovieDetailsType[]
}

const initialState: InitialStateType = {
  myList: [],
}

export const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<MovieDetailsType>) => {
      const isOnList = state.myList.filter((item) => item.id === action.payload.id)
      if (!isOnList.length) {
        state.myList.push(action.payload)
      }
    },
    removeMovie: (state, action: PayloadAction<MovieDetailsType>) => {
      const newList = state.myList.filter((movie) => movie.id !== action.payload.id)
      return { ...state, myList: newList }
    },
  },
})

export const { addMovie, removeMovie } = myListSlice.actions
export const selectMyList = (state: RootState) => state.myList.myList
export default myListSlice.reducer
