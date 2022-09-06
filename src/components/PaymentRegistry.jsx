import { useState } from "react";
import styled from "styled-components";

export default function PaymentRegistry() {
  const [registry, setRegistry] = useState([1, 2]);

  return (
    <Container>
      {registry.length === 0 ? (
        <h1>Não tem nada amigo</h1>
      ) : (
        <div>OPA AQ TEM HEIN</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  height: 75vh;
  margin-top: 22px;
`;
