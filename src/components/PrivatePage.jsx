import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const authorization = JSON.parse(localStorage.getItem("mywallet"));
  const navigate = useNavigate();

  if (authorization) {
    return <>{children}</>;
  } else {
    useEffect(() => {
      navigate("/");
    }, []);
  }
}
