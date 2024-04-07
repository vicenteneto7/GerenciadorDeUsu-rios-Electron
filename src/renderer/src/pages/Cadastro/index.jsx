import { Container1, Container2, ErroP, Form, Label, Title } from "./styles";

import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { ApiCI4 } from "../../services/api";
import { Link } from "react-router-dom";


export function Cadastro() {

    const schema = Yup.object().shape({
        name: Yup.string("Digite um nome válido").required("O nome é obrigatório"),
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string("Digite uma senha válida").required("A senha é obrigatória"),
        confirmPassword: Yup.string("Digite uma senha válida").oneOf([Yup.ref("password")], 'As senhas devem ser iguais')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema)
      })

    const onSubmit = async (data) => {
        const res = await ApiCI4.post('cadastrar-usuario',{
            name: data.name,
            email: data.email,
            password: data.password
        })
        console.log(res)
    }

    

    return(
        <Container1>
            <Container2>
                <Title>Cadastrar</Title>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <input {...register("name")} type="text" />
                <ErroP>{errors.name?.message}</ErroP>

                <Label>Email</Label>
                <input {...register("email")} type="email" />
                <ErroP>{errors.email?.message}</ErroP>
            
                <Label>Senha</Label>
                <input {...register("password")} type="password" />
                <ErroP>{errors.password?.message}</ErroP>

                <Label>Confirmar senha</Label>
                <input {...register("confirmPassword")} type="password" />
                <ErroP>{errors.confirmPassword?.message}</ErroP>
                 
                <button type="submit">Cadastrar</button>
                </Form>
                <p style={{color: 'white'}}>
          Já possui conta?
          <Link to='/login' style={{cursor: 'pointer'}}>Entre na sua conta</Link>
        </p>
            </Container2>
        </Container1>
    )
}