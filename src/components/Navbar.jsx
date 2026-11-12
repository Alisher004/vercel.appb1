import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
export default function Navbar() {
  const { user } = useAuth();
  return (
    <nav>
      <NavLink to="/">Башкы</NavLink>
      {user ? (
        <NavLink to="/profile">Профиль</NavLink>
      ) : (
        <>
          <NavLink to="/login">Кирүү</NavLink>
          <NavLink to="/register">Катталуу</NavLink>
        </>
      )}
    </nav>
  );
}