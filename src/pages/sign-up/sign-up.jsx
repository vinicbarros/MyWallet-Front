import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function SignUp() {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleForm(e) {
    e.preventDefault();
    const equal = formVal.password === formVal.confirm;
    if (!equal) return console.log("Senhas não estão iguais!");
    console.log(formVal);
  }

  function handleInput(e) {
    let value = e.target.value;
    setFormVal({ ...formVal, [e.target.name]: value });
  }
  return (
    <Container>
      <Title>MyWallet</Title>
      <Form onSubmit={handleForm}>
        <input
          onChange={handleInput}
          value={formVal.name}
          name="name"
          type="text"
          placeholder="Nome"
          required
        />
        <input
          onChange={handleInput}
          name="email"
          value={formVal.email}
          type="e-mail"
          placeholder="E-mail"
          required
        />
        <input
          onChange={handleInput}
          name="password"
          value={formVal.password}
          type="password"
          placeholder="Senha"
          required
        />
        <input
          onChange={handleInput}
          name="confirm"
          value={formVal.confirm}
          type="password"
          placeholder="Confirme a senha"
          required
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">
        <a>Já tem uma conta? Entre agora!</a>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  font-family: "Raleway";
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 36px;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-family: "Saira Stencil One";
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const Form = styled.form`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 85%;
    height: 58px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin-bottom: 13px;
  }

  input::placeholder {
    font-size: 20px;
    font-weight: 500;
    color: black;
  }

  button {
    background-color: #a328d6;
    width: 88%;
    height: 46px;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    font-size: 20px;
  }
`;
