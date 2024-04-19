import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const InputRadioRoot = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const InputRadioItem = styled(RadioGroup.Item)`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme['gray-200']};
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
  }
`
export const InputRadioIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['gray-400']};
  }
`
