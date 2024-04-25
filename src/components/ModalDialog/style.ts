import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { devices } from '../../styles/theme/devices'

export const OverlayModal = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
`

export const ModalContent = styled(Dialog.Content)`
  width: 50%;
  height: 90vh;
  background-color: ${(props) => props.theme['gray-900']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-direction: column;

  overflow: auto;

  @media ${devices.mobile} {
    width: 90%;
    height: 80vh;
  }
`
