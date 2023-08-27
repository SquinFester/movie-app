import { selectMovieId } from '../../store/movieIdSlice'
import { useAppSelector } from '../../store/store'
import { DetalisModal } from './DetalisModal'

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const movieId = useAppSelector(selectMovieId)
  return (
    <>
      {children}
      {movieId && <DetalisModal movieId={movieId} />}
    </>
  )
}
