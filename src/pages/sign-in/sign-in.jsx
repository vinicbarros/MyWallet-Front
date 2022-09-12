import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postSignIn } from "../../services/MyWallet";
import UserContext from "../../context/userContext";

export default function SignIn() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    try {
      const data = await postSignIn({
        email: userLogin.email,
        password: userLogin.password,
      });
      setUser(data.data);
      const JSONauth = JSON.stringify({
        token: data.data.token,
        name: data.data.name,
      });
      localStorage.setItem("mywallet", JSONauth);
      navigate("/home");
    } catch (error) {
      setError({
        isError: true,
        message: error.response.data.message,
      });
    }
  }

  function handleSignIn(e) {
    const value = e.target.value;
    setUserLogin({ ...userLogin, [e.target.name]: value });
  }

  return (
    <>
      <Container>
        <Title>MyWallet</Title>
        <Form onSubmit={handleForm}>
          <input
            autoComplete="off"
            onChange={handleSignIn}
            value={userLogin.email}
            name="email"
            type="text"
            placeholder="E-mail"
            required
          />
          <input
            onChange={handleSignIn}
            value={userLogin.password}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {error.isError ? <h5>{error.message}</h5> : <></>}
          <button type="submit">Enter</button>
        </Form>
        <Link to="sign-up">
          <a>First time here? Sign up!</a>
        </Link>
      </Container>
    </>
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

  h5 {
    color: #ffffff;
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 15px;
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
