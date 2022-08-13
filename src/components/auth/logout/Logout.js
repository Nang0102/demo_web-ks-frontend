import React, { useContext } from "react";
// import "../../header/header.css";
import { LoginContext } from "../../../context/AuthContext";

function Logout() {
  const { setLogin } = useContext(LoginContext);
  async function handleLogout() {
    try {
      setLogin(false);
      localStorage.removeItem("user");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <button style={{ fontSize: 20 }} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Logout;
