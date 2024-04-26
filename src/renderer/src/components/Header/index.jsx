import {
  Container,
  ContainerUnique,
  ContainerText,
  PageLink,
  Img,
  Line,
  PageLinkExit,
  P,
  Container3,
  PageLinkHome
} from './styles'
import Person from '../../assets/user.png'
import { useNavigate } from 'react-router-dom'
import { Container2 } from '../../pages/Home/styles'

export function Header() {
    const navigate = useNavigate()

  return (
    <Container>
        <PageLinkHome onClick={() => navigate('/')}>
            Home
        </PageLinkHome>
      <ContainerUnique>   
        <Container3>
        <Line></Line>
          <Img src={Person} alt="Logo-da-pessoa"></Img>
        </Container3>
        <ContainerText>
          <P>Olá, Vicente</P>
          <PageLinkExit>
            <p>Sair</p>
          </PageLinkExit>
        </ContainerText>
      </ContainerUnique>
    </Container>
  )
}
