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

type FetchedDataType = {
  page: number
  results: FetchedMovieType[]
  total_pages: number
  total_results: number
}

type GenersType = {
  id: number
  name: string
}

type ProductionCompaniesType = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

type ProductionCountryType = {
  iso_3166_1: string
  name: string
}

type SpokenLanguageType = {
  english_name: string
  iso_639_1: string
  name: string
}

type MovieDetailsType = {
  adult: boolean
  backdrop_path: string | null
  budget: number
  genres: GenersType[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompaniesType[]
  production_countries: ProductionCountryType[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguageType[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
