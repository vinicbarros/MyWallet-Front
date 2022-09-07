import styled from "styled-components";
import PaymentRegistry from "../../components/PaymentRegistry";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function receiptOrEntrance(type) {
    navigate("/transactions", { state: { type: type } });
  }

  return (
    <Container>
      <Box>
        <Title>Hi, Fulano</Title>
        <PaymentRegistry />
        <Wrapper>
          <PaymentBox
            onClick={() => {
              receiptOrEntrance("payment");
            }}
          >
            <h4>New payment</h4>
            <AiOutlinePlusCircle
              size="1.7em"
              color="white"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
              }}
            />
          </PaymentBox>
          <PaymentBox
            onClick={() => {
              receiptOrEntrance("receipt");
            }}
          >
            <h4>New receipt</h4>
            <AiOutlineMinusCircle
              size="1.7em"
              color="white"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
              }}
            />
          </PaymentBox>
        </Wrapper>
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

const Wrapper = styled.div`
  height: 18vh;
  display: flex;
  justify-content: space-between;
`;

const PaymentBox = styled.div`
  position: relative;
  width: 43vw;
  margin-top: 13px;
  background-color: #a328d6;
  border-radius: 5px;

  h4 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    font-size: 17px;
    line-height: 20px;
    width: 64px;
    font-weight: bold;
  }
`;
