import { useAppSelector } from '../../store/store'
import { DetalisModal } from './DetalisModal'

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const movieId = useAppSelector((state) => state.movieId.movieId)
  return (
    <>
      {children}
      {movieId ? <DetalisModal movieId={movieId} /> : null}
    </>
  )
}
