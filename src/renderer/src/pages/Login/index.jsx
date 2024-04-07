import { Container1, Container2, ErroP, Form, Title } from "./styles";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useUser } from "../../hooks/UserContext.jsx";

import { useNavigate } from "react-router-dom";

import { ApiCI4 } from "../../services/api";
import { Link } from "react-router-dom";

export function Login() {
  const { putUserData } = useUser();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string("Digite uma senha válida").required(
      "A senha é obrigatória"
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (dataUser) => {
    const { data } = await toast.promise(
      ApiCI4.post("/login", {
        email: dataUser.email,
        password: dataUser.password,
      }),
      {
        pending: "Verificando seus dados",
        success: "Seja bem-vindo(a)",
        error: "Deu ruim! 🤯",
      }
    );

    putUserData(data);

    setTimeout(() => {
      navigate("/");
    }, 1000);
    console.log(data);
  };

  return (
    <Container1>
      <Container2>
        <Title>Entrar</Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input {...register("email")} type="email" />
          <ErroP>{errors.email?.message}</ErroP>

          <label>Senha</label>
          <input {...register("password")} type="password" />
          <ErroP>{errors.password?.message}</ErroP>

          <button type="submit">Login</button>
        </Form>
        <p style={{ color: "white" }}>
          Não possui conta?
          <Link to="/cadastrar-usuario" style={{ cursor: "pointer" }}>
            crie sua conta
          </Link>
        </p>
      </Container2>
    </Container1>
  );
}
