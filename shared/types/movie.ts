export interface MovieRecommendation {
  id: string
  title: string
  year: number
  genre: string
  director?: string
  plot: string
  imageUrl: string
  rating?: string
  duration?: number
  streamingAvailability?: string[]
}

export interface MovieSearchResult {
  results: MovieRecommendation[]
  total: number
}
