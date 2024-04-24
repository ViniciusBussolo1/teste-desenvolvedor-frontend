import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import { X } from 'phosphor-react'
import { ModalContent, OverlayModal } from './style'

interface ModalDiaogProps {
  buttonOpenModal: React.ReactNode
  ContentModal: React.ReactNode
  openModal?: boolean
  onOpenChangeModal?: (isOpen: boolean) => void
}
export default function ModalDialog({
  buttonOpenModal,
  ContentModal,
  openModal,
  onOpenChangeModal,
}: ModalDiaogProps) {
  return (
    <Dialog.Root open={openModal} onOpenChange={onOpenChangeModal}>
      <Dialog.Trigger asChild>{buttonOpenModal}</Dialog.Trigger>
      <OverlayModal />
      <ModalContent>
        <Dialog.Close asChild>
          <Button variant="icon" style={{ alignSelf: 'flex-end' }}>
            <X />
          </Button>
        </Dialog.Close>
        <div>{ContentModal}</div>
      </ModalContent>
    </Dialog.Root>
  )
}
