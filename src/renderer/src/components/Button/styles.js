import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 2.7rem;
  width: 22.4rem;
  background-color: #8257e6;
  color: white;
  border-radius: 4px;
  outline: none;
  text-decoration: none;
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`
