import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Form from "../../common/FormStyle";

export default function Payments() {
  const { state } = useLocation();
  const { type } = state;

  return (
    <Container>
      <Box>
        <h1>{type === "payment" ? <> New payment </> : <> New receipt </>}</h1>
        <Form>
          <input placeholder="Value" />
          <input placeholder="Description" />
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
