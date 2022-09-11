import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../../common/FormStyle";
import { postTransaction } from "../../services/MyWallet";
import { AiOutlineClose } from "react-icons/ai";

export default function Transactions() {
  const { state } = useLocation();
  const { type } = state;
  const [transaction, setTransaction] = useState({
    value: "",
    description: "",
  });
  const navigate = useNavigate();

  async function sendTransaction(e) {
    e.preventDefault();

    try {
      await postTransaction({
        amount: Number(transaction.value),
        description: transaction.description,
        type: type,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  function handleForm(e) {
    const val = e.target.value;
    setTransaction({ ...transaction, [e.target.name]: val });
  }

  return (
    <Container>
      <Box>
        <Wrap>
          <h1>
            {type === "payment" ? <> New payment </> : <> New receipt </>}
          </h1>
          <AiOutlineClose
            size="1.8em"
            color="white"
            onClick={() => {
              navigate("/home");
            }}
          />
        </Wrap>
        <Form onSubmit={sendTransaction}>
          <input
            placeholder="Value"
            type="number"
            name="value"
            value={transaction.value}
            autoComplete="off"
            onChange={handleForm}
            required
          />
          <input
            placeholder="Description"
            type="text"
            name="description"
            value={transaction.description}
            maxLength="25"
            autoComplete="off"
            onChange={handleForm}
            required
          />
          <button type="submit">
            {type === "payment" ? <> Save payment </> : <> Save receipt </>}
          </button>
        </Form>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway";
  height: 100vh;
  background-color: #8c11be;
`;

const Box = styled.main`
  margin-top: 25px;
  width: 90%;

  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
