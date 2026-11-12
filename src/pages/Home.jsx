import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Кош келиңиз!</h1>
      {user ? (
        <p>Салам, {user.displayName}! <Link to="/profile">Профилге өтүү</Link></p>
      ) : (
        <p><Link to="/login">Кириңиз</Link> же <Link to="/register">катталыңыз</Link></p>
      )}
    </div>
  );
}