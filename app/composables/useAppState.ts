import { AppState } from '#shared/types/app'
import type { Partner } from '#shared/types/partner'
import type { MovieRecommendation } from '#shared/types/movie'

export const useAppState = () => {
  const currentState = useState<AppState>('appState', () => AppState.LANDING)
  const currentPartner = useState<Partner | null>('partner', () => null)
  const selectedMovie = useState<MovieRecommendation | null>('selectedMovie', () => null)
  const partnerMovie = useState<MovieRecommendation | null>('partnerMovie', () => null)

  const transitionToState = (newState: AppState) => {
    currentState.value = newState
  }

  const setPartner = (partner: Partner | null) => {
    currentPartner.value = partner
  }

  const setSelectedMovie = (movie: MovieRecommendation | null) => {
    selectedMovie.value = movie
  }

  const setPartnerMovie = (movie: MovieRecommendation | null) => {
    partnerMovie.value = movie
  }

  const resetApp = () => {
    currentState.value = AppState.LANDING
    currentPartner.value = null
    selectedMovie.value = null
    partnerMovie.value = null
  }

  return {
    currentState,
    currentPartner,
    selectedMovie,
    partnerMovie,
    transitionToState,
    setPartner,
    setSelectedMovie,
    setPartnerMovie,
    resetApp,
  }
}
