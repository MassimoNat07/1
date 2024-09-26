import { Link } from "react-router-dom";
import "./HomePage.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function HomePage() {
  const { user } = useContext(CurrentUserContext);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <>


      <button className="reg">
        <Link to="/sign-up">
          <p>Registrati</p>
        </Link>
      </button>

      <p> O </p>

      <button className="log">
        <Link to="/login">
          <p>Login</p>
        </Link>
      </button>
    </>
  );
}
