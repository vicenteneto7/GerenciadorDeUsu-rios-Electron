import styled from 'styled-components'

export const Container1 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container2 = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const Container4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 21.4rem;
  margin-top: 1rem;
`
export const TitleText = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  font-weight: 500;
`
export const Label = styled.p`
  margin-top: 1.6rem;
  margin-bottom: 0.3rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;

  color: #ffffff;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputText = styled.input`
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
export const SignInLogin = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`
