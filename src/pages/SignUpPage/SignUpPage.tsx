import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./SignUpPage.css";

interface FormData {
	username: string;
	surname: string;
	email: string;
	password: string;
	nation: string;
}

export function SignUpPage() {
	const navigate = useNavigate();
	const { setUser } = useContext(CurrentUserContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget as HTMLFormElement;

		const formData: FormData = {
			username: form.username.value,
			surname: form.surname.value,
			email: form.email.value,
			password: form.password.value,
			nation: form.nation.value,
		};
		localStorage.setItem("formData", JSON.stringify(formData));

		setUser(formData);
		navigate("/dashboard");
	};

	return (
		<>
			<div className="header-sign-in">
				<h1>Find the Dreamers</h1>
			</div>

			<form onSubmit={handleSubmit}>
				<h2 className="record">Registrati</h2>
				<label>
					<input type="text" placeholder="Nome" name="username" required />
				</label>
				<label>
					<input type="text" placeholder="Cognome" name="surname" required />
				</label>
				<label>
					<input type="text" placeholder="Email" name="email" required />
				</label>
				<label>
					<input type="password" placeholder="Password" name="password" required />
				</label>

				<label>
					<select name="nation" required>
						<option value="cyn">Choose your nation</option>
						<option value="it">Italy</option>
						<option value="eng">England</option>
						<option value="fr">France</option>
						<option value="us">Usa</option>
						<option value="de">Germany</option>
						<option value="br">Brasil</option>
						<option value="esp">Spain</option>
						<option value="jp">Japan</option>
					</select>
				</label>

				<button type="submit" className="sign-in-button">
					Submit
				</button>
			</form>
		</>
	);
}
