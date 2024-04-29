import styled from 'styled-components'

export const Table = styled.table`
  width: 90%;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
  border-radius: 5px;
  margin: 2rem auto;
  word-break: break-all;
`

export const Thead = styled.thead`
  width: 100%;
`

export const Tbody = styled.tbody``

export const Tr = styled.tr`
`

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;

  padding-bottom: 1.8rem;
 
  font-size: 1.3rem;
  width: ${(props) => (props.width ? props.width : 'auto')};
  position: ${(props) => (props.position ? props.position : '')};
  
  white-space: nowrap;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`

export const Td = styled.td`
  cursor: pointer;

  padding-top: 2.5rem;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};

  &:hover{
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`
