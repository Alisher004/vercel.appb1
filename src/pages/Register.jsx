import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { getErrorMessage } from "../utils/authErrors";
import GoogleButton from "../components/GoogleButton";
 
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth, email, password
      );
      await updateProfile(user, { displayName: name });
      navigate("/profile");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Катталуу</h1>
      <input placeholder="Атыңыз" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Сырсөз (кеминде 6 белги)" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button type="submit">Катталуу</button>
      <GoogleButton />
      <p>Аккаунтуңуз барбы? <Link to="/login">Кирүү</Link></p>
    </form>
  );
}