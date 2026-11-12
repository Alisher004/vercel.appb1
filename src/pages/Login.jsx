import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getErrorMessage } from "../utils/authErrors";
import GoogleButton from "../components/GoogleButton";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Кирүү</h1>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Сырсөз" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button type="submit">Кирүү</button>
      <GoogleButton />
      <p>Аккаунтуңуз жокпу? <Link to="/register">Катталуу</Link></p>
    </form>
  );
}