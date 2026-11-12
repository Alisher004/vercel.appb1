import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
 
export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
 
  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }
  return (
    <div className="profile">
      {user.photoURL && (
        <img src={user.photoURL} alt="Аватар" referrerPolicy="no-referrer" />
      )}
      <h1>{user.displayName || "Колдонуучу"}</h1>
      <p>{user.email}</p>
      <p>Катталган күнү: {new Date(user.metadata.creationTime).toLocaleDateString()}</p>
      <button onClick={handleLogout}>Чыгуу</button>
    </div>
  );
}