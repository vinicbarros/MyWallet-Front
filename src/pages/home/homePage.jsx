import styled from "styled-components";
import PaymentRegistry from "../../components/PaymentRegistry";

export default function HomePage() {
  return (
    <Container>
      <Box>
        <Title>Hi, Fulano</Title>
        <PaymentRegistry />
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
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  color: #ffffff;
`;
