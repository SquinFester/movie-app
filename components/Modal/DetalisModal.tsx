import { Modal, Portal, Text } from 'react-native-paper'

export const DetalisModal = ({ movieId }: { movieId: number | null }) => {
  return (
    <Portal>
      <Modal visible={!!movieId} onDismiss={() => {}}>
        <Text>DetalisModal</Text>
      </Modal>
    </Portal>
  )
}
