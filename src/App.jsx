import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in";
import GlobalStyle from "./assets/style/GlobalStyle";
import { SignUp } from "./pages/sign-up/sign-up";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
