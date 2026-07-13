import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/Login", { replace: true });
  }

  return (
     <button
    style={{
      background: "red",
      color: "white",
      padding: "10px",
      fontSize: "18px"
    }}
    onClick={handleLogout}
  >
    Logout
  </button>
  );
}

export default Logout;

