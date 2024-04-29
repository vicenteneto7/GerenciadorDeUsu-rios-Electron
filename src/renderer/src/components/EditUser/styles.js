import styled from 'styled-components'

import { Button } from '../Button'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(130,87,230,1) 100%);
  padding-top: 12rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: transparent;
    width: 417px;
    height: max-content;
    border-radius: 10px;
    padding: 3rem;
  }
`

export const Label = styled.p`
  margin-top: 1.6rem;
  margin-bottom: 0.3rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;

  color: #ffffff;
`

export const Input = styled.input`
  height: 3rem;
  width: 27.4rem;
  border-radius: 0.2rem;
  text-align: start;
  padding: 0.5rem 1rem;

  font-weight: 300;

  background-color: #1c1c1f;
  color: #50505c;
  border: ${(props) => (props.error ? 'solid 2px #CC1717' : ' none')};
`



export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`