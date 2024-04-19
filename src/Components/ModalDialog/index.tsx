import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import { X } from 'phosphor-react'
import { ModalContent, OverlayModal } from './style'

interface ModalDiaogProps {
  buttonOpenModal: React.ReactNode
  ContentModal: React.ReactNode
}
export default function ModalDialog({
  buttonOpenModal,
  ContentModal,
}: ModalDiaogProps) {
  return (
    <Dialog.Root>
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
