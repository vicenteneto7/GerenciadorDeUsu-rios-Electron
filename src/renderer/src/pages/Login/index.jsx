import {
  Container1,
  Container2,
  Container3,
  Container4,
  Form,
  InputText,
  Label,
  SignInLogin,
  TextLink,
  TitleText
} from './styles'

import { Button } from '../../components/Button/index.jsx'

import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'

import { useUser } from '../../hooks/UserContext.jsx'

import { useNavigate } from 'react-router-dom'

import { ApiCI4 } from '../../services/api'
import { Link } from 'react-router-dom'
import { ErrorMessage } from '../../components/ErrorMenssage/index.jsx'

export function Login() {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string('Digite uma senha válida').required('A senha é obrigatória')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (dataUser) => {
    const { data } = await toast.promise(
      ApiCI4.post('/login', {
        email: dataUser.email,
        password: dataUser.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Deu ruim! 🤯'
      }
    )

    putUserData(data)

    setTimeout(() => {
      navigate('/')
    }, 1000)
    console.log(data)
  }

  return (
    <Container1>
      <Container2>
        <TitleText>Login</TitleText>
        <Container3>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>E-mail</Label>
            <InputText
              {...register('email', { required: true })}
              error={errors.email?.message}
              placeholder="Digite o seu e-mail"
              type="email"
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <InputText
              {...register('password', { required: true })}
              error={errors.password?.message}
              placeholder="Digite a sua senha"
              type="password"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button style={{ marginTop: '1.7rem' }} type="submit">
              Entrar
            </Button>
          </Form>
          <Container4>
            <SignInLogin style={{ color: '#C6C6C7' }}>Não possui conta?</SignInLogin>
            <Link to="/cadastrar-usuario">
              <TextLink>Inscreva-se</TextLink>
            </Link>
          </Container4>
        </Container3>
      </Container2>
    </Container1>
  )
}
