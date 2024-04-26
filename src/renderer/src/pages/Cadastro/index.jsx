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

import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { ApiCI4 } from '../../services/api'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ErrorMessage } from '../../components/ErrorMenssage'

export function Cadastro() {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string('Digite um nome válido').required('O nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string('Digite uma senha válida').required('A senha é obrigatória'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    try {
      const { status } = await ApiCI4.post(
        'cadastrar-usuario',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
        setTimeout(() => {
          navigate('/first-login')
        }, 1000)
      } else if (status === 409) {
        toast.error('E-mail já cadastrado, faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente.')
    }
    console.log(clientData)
  }

  return (
    <Container1>
      <Container2>
        <TitleText>Cadastrar</TitleText>
        <Container3>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Nome</Label>
            <InputText
              {...register('name', { required: true })}
              error={errors.name?.message}
              placeholder="Digite o seu nome"
              type="text"
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label>Email</Label>
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

            <Label>Confirmar senha</Label>
            <InputText
              {...register('confirmPassword', { required: true })}
              error={errors.password?.message}
              placeholder="Digite a sua senha novamente"
              type="password"
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button style={{ marginTop: '1.7rem' }} type="submit">
              Criar conta
            </Button>
          </Form>
          <Container4>
            <SignInLogin style={{ color: '#C6C6C7' }}>Já tem uma conta?</SignInLogin>
            <Link to="/login">
              <TextLink>Fazer login</TextLink>
            </Link>
          </Container4>
        </Container3>
      </Container2>
    </Container1>
  )
}
