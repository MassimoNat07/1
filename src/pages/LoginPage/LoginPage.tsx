import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "../SignUpPage/SignUpPage.css";

export function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useContext(CurrentUserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = e.target as HTMLFormElement;
    const enteredEmail = formData.email.value;
    const enteredPassword = formData.password.value;

    const savedData = localStorage.getItem("formData") ?? "";
    const savedFormData = JSON.parse(savedData);

    if (
      savedFormData.email === enteredEmail &&
      savedFormData.password === enteredPassword
    ) {
      setUser(savedFormData);

      navigate("/dashboard");
    } else {
      alert("Credenziali non valide. Controlla email e password e riprova.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="login-text"> Log In</h2>
        <label>
          <input
            type="text"
            placeholder="Enter the email"
            name="email"
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Enter the password"
            name="password"
            required
          />
        </label>

        <button type="submit" className="log-in-button">
          Login
        </button>
      </form>
    </>
  );
}
