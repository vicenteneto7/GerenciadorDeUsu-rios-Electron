import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from '../Button'

import { ErrorMessage } from '../ErrorMenssage'
import { ApiCI4 } from '../../services/api'
import { Container, Label, Input, ContainerInput } from './styles'

export function EditUser() {
  const navigate = useNavigate()
  const { state: user } = useLocation()

  console.log(user)

  const schema = Yup.object().shape({
    name: Yup.string('Digie um nome válido'),
    email: Yup.string().email('Dtigite um e-mail válido'),
    password: Yup.string('Digite uma senha válida'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (data) => {
    const userDataFormData = new FormData()
    userDataFormData.append('name', data.name)
    userDataFormData.append('email', data.email)
    userDataFormData.append('password', data.password)

    await toast.promise(ApiCI4.put(`editar-usuario/${user.id}`, userDataFormData), {
      pending: 'Editando novo usuário',
      success: 'Usuário editado com sucesso',
      error: 'Falha ao editar usuário'
    })

    setTimeout(() => {
      navigate('/users')
    }, 2000)
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
          <Input type="text" {...register('password')} defaultValue={user.email} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>

        <Button>Editar Produto</Button>
      </form>
    </Container>
  )
}
