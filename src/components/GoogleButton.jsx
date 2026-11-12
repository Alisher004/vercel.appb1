import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { getErrorMessage } from "../utils/authErrors";
export default function GoogleButton() {
  const navigate = useNavigate();
  async function handleGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (err) {
      alert(getErrorMessage(err.code));
    }
  }
  return <button type="button" onClick={handleGoogle}>Google менен кирүү</button>;
}