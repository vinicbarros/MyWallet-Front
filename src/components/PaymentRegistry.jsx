import { useEffect, useState } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import { getTransactions } from "../services/MyWallet";

export default function PaymentRegistry() {
  const [transactions, setTransactions] = useState([]);
  const [sum, setSum] = useState(0.0);

  useEffect(() => {
    async function fetchData() {
      try {
        const transactions = await getTransactions();
        setTransactions(transactions.data);
        let sum = 0;
        transactions.data.forEach((each) => {
          if (each.type == "receipt") {
            sum += Number(each.amount);
          } else {
            sum -= Number(each.amount);
          }
        });
        setSum(sum);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {transactions.length === 0 ? (
        <h1>There are no registry of payments or receipts</h1>
      ) : (
        <>
          <TransactionBox>
            {transactions.map((each, key) => (
              <Transaction
                key={key}
                date={each.date}
                description={each.description}
                amount={each.amount}
                type={each.type}
              />
            ))}
          </TransactionBox>
          <Balance>
            <h2>BALANCE</h2>
            <Value type={sum}>{sum.toFixed(2)}</Value>
          </Balance>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  font-family: "Raleway";
  display: flex;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  height: 68vh;
  margin-top: 22px;
  overflow: scroll;

  h1 {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(45% - 88px);
    text-align: center;
    color: #868686;
    font-size: 20px;
    line-height: 23px;
    width: 220px;
  }
`;

const TransactionBox = styled.main`
  height: 100%;
  width: 100vw;
  margin: 22px 14px 0px 14px;
`;

const Balance = styled.div`
  height: 34px;
  width: 92%;
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 0px 0px 0px 14px;

  h2 {
    font-weight: bold;
  }
`;

const Value = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => (props.type > 0 ? "#03AC00" : "#C70000")};
`;
