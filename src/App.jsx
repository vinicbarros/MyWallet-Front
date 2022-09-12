import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in";
import GlobalStyle from "./assets/style/GlobalStyle";
import { SignUp } from "./pages/sign-up/sign-up";
import HomePage from "./pages/home/homePage";
import Transactions from "./pages/Transactions/Transactions";
import UserContext from "./context/userContext";
import { useState } from "react";
import PrivatePage from "./components/PrivatePage";

function App() {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser, refresh, setRefresh }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/home"
              element={
                <PrivatePage>
                  <HomePage />
                </PrivatePage>
              }
            />
            <Route
              path="/transactions"
              element={
                <PrivatePage>
                  <Transactions />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
