import { Link } from "react-router-dom";
import styled from "styled-components";

export function SignUp() {
  return (
    <Container>
      <Title>MyWallet</Title>
      <Form>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" />
        <input placeholder="Confirme a senha" />
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
