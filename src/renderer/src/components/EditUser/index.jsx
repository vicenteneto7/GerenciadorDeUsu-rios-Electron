import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '../Button'

import { ErrorMessage } from '../ErrorMenssage'
import { ApiCI4 } from '../../services/api'
import { Container, Label, Input } from './styles'

export function EditUser() {
  const navigate = useNavigate()
  const { state: user } = useLocation()

  const schema = Yup.object().shape({
    name: Yup.string('Digie um nome válido'),
    email: Yup.string().email('Dtigite um e-mail válido'),
    password: Yup.string('Digite uma senha válida')
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
      const { status } = await ApiCI4.patch(
        `editar-usuario/${user.id}`,
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Usuário atualizado')
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } 
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente.')
    }
    console.log(clientData)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} defaultValue={user.name} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>E-mail</Label>
          <Input type="email" {...register('email')} defaultValue={user.email} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Senha</Label>
          <Input type="text" {...register('password')} defaultValue={''} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>

        <Button>Atualizar Usuário</Button>
      </form>
    </Container>
  )
}
