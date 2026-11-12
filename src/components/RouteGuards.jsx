import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
// Кирбеген колдонуучуну /login'ге жиберет
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Жүктөлүүдө...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
 
// Кирген колдонуучуну /profile'га жиберет
export function GuestRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Жүктөлүүдө...</p>;
  if (user) return <Navigate to="/profile" replace />;
  return children;
}