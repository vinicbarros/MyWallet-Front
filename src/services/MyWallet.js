import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

async function postSignUp(data) {
  const promise = await axios.post(`${BASE_URL}/sign-up`, data);
  return promise;
}

async function postSignIn(login) {
  const promise = await axios.post(`${BASE_URL}/`, login);
  return promise;
}

async function postTransaction(transaction) {
  const config = createHeaders();
  const promise = await axios.post(
    `${BASE_URL}/transactions`,
    transaction,
    config
  );
  return promise;
}

async function getTransactions() {
  const config = createHeaders();
  const promise = await axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

export { postSignUp, postSignIn, postTransaction, getTransactions };
