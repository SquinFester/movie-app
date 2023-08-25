import { ACCESS_TOKEN, API_KEY } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
}

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<FetchedMovieType[], number>({
      query: (page) => `discover/movie?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`,
      transformResponse: (res: FetchedDataType) => res.results,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getDetails: builder.query<MovieDetailsType, number>({
      query: (movieId) => ({
        url: `movie/${movieId}`,
        ...options,
      }),
    }),
    searchMovie: builder.query<FetchedMovieType[], string>({
      query: (query) => ({
        url: `search/movie?query=${query}`,
        ...options,
      }),
      transformResponse: (res: FetchedDataType) => {
        const results = res.results.sort((a, b) => b.popularity - a.popularity)
        return results
      },
    }),
  }),
})

export const { useGetMoviesQuery, useGetDetailsQuery, useSearchMovieQuery } = moviesApi
