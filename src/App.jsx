import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/sign-in/sign-in";
import GlobalStyle from "./assets/style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
