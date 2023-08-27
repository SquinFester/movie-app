import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import movieId from './movieIdSlice'
import { moviesApi } from '../api/moviesApi'
import myList from './myListSlcie'

export const store = configureStore({
  reducer: {
    movieId,
    [moviesApi.reducerPath]: moviesApi.reducer,
    myList,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
