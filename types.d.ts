type MovieBaseInfo = {
  adult: boolean
  backdrop_path: string | null
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

type FetchedMovieType = MovieBaseInfo & {
  genere_id: number[]
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

type MovieDetailsType = MovieBaseInfo & {
  budget: number
  genres: GenersType[]
  homepage: string
  imdb_id: string
  production_companies: ProductionCompaniesType[]
  production_countries: ProductionCountryType[]
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguageType[]
  status: string
  tagline: string
}
