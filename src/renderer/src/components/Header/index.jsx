import {
  Container,
  ContainerUnique,
  ContainerText,
  Img,
  Line,
  PageLinkExit,
  P,
  Container3,
  PageLinkHome,
  ContainerLeft
} from './styles'
import { useUser } from '../../hooks/UserContext'
import Person from '../../assets/user.png'
import { useNavigate, useLocation } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()
    const location = useLocation();

    const { logout, userData } = useUser()

    console.log(userData)

    const LogoutUser = () => {
        logout()
        navigate('/login')
    }
  return (
    <Container>
      <ContainerLeft>
        <PageLinkHome isActive={location.pathname == '/'} onClick={() => navigate('/')}>
            Home
        </PageLinkHome>
        </ContainerLeft>
      <ContainerUnique>   
        <Container3>
          <Img src={Person} alt="Logo-da-pessoa"></Img>
          <Line></Line>
        </Container3>
        <ContainerText>
          <P>Olá, {userData.name}</P>
          <PageLinkExit>
            <p onClick={LogoutUser}>Sair</p>
          </PageLinkExit>
        </ContainerText>
      </ContainerUnique>
    </Container>
  )
}
