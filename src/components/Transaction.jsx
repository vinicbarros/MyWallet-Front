import styled from "styled-components";

export default function Transaction({ type, amount, description, date }) {
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
      <Amount type={type}>{amount}</Amount>
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
`;

const Box = styled.div`
  display: flex;

  div:first-child {
    margin-right: 10px;
    width: 42px;
  }
`;

const Container = styled.div``;
