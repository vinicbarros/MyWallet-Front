import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in";
import GlobalStyle from "./assets/style/GlobalStyle";
import { SignUp } from "./pages/sign-up/sign-up";
import HomePage from "./pages/home/homePage";
import Payments from "./pages/Payments/Payments";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/transactions" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
