import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { deleteTransaction } from "../services/MyWallet";
import { useContext } from "react";
import UserContext from "../context/userContext";

export default function Transaction({ type, amount, description, date, id }) {
  const { setRefresh, refresh } = useContext(UserContext);

  async function deleteTransactions(id) {
    if (window.confirm("Do you want to delete this transaction?")) {
      try {
        const deleted = await deleteTransaction(id);
        setRefresh(!refresh);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Wrapper>
      <Box>
        <Container>
          <Date>{date}</Date>
        </Container>
        <Container>
          <Description>{description}</Description>
        </Container>
      </Box>
      <Container>
        <Amount type={type}>{amount}</Amount>
        <AiOutlineClose
          onClick={() => {
            deleteTransactions(id);
          }}
          color="#C6C6C6"
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 16px;
  font-family: "Raleway";
  display: flex;
  justify-content: space-between;
`;

const Date = styled.h3`
  color: #c6c6c6;
  font-size: 16px;
  line-height: 18px;
`;

const Description = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;
const Amount = styled.h4`
  color: ${(props) => (props.type === "receipt" ? "#03AC00" : "#C70000")};
  font-size: 16px;
  margin-right: 2px;
`;

const Box = styled.div`
  display: flex;

  div:first-child {
    margin-right: 10px;
    width: 42px;
  }
`;

const Container = styled.div`
  display: flex;
`;
