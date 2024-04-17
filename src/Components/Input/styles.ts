import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  background-color: transparent;
  border:2px solid ${props => props.theme['gray-600']};
  border-radius: 8px;
  color: ${props => props.theme['gray-100']};
  padding: .625rem .5rem  ;
  outline: 0;
  transition: .3s ease-in-out;

  &:focus {
    border-color: ${props => props.theme['gray-200']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-200']};
  }
`;