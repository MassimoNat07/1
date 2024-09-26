import { FormEvent } from "react";
import { Post } from "../../types/types";

import "./Form.css";

interface FormProps {
	initialValues?: Post;
	onSubmit: (data: Post) => void;
	onCancel?: () => void;
	isEditing?: boolean;
}

export const Form = ({ onSubmit, onCancel, initialValues, isEditing }: FormProps) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		const postData: Post = {
			title: formData.get("title") as string,
			description: formData.get("description") as string,
			categories: formData.get("categories") as string,
			user: {
				username: formData.get("username") as string,
				surname: formData.get("surname") as string,
			},
		};

		onSubmit(postData);
	};

	return (
		<div className="card">
			<div className="centeredContainer">
				<h1>Write your mission</h1>

				<form onSubmit={handleSubmit}>
					<label>
						<input
							id="Title"
							type="text"
							placeholder="Titolo"
							name="title"
							required
							defaultValue={initialValues?.title}
						/>
					</label>

					<label>
						<textarea
							placeholder="Descrizione"
							name="description"
							rows={5}
							cols={20}
							required
							defaultValue={initialValues?.description}
						/>
					</label>

					<label>
						<select name="categories" required defaultValue={initialValues?.categories}>
							<option value="art">Art</option>
							<option value="coding">Coding</option>
							<option value="gardening">Gardening</option>
							<option value="business">Business</option>
							<option value="catering">Catering</option>
							<option value="studio">Studio</option>
							<option value="technologies">Technologies</option>
							<option value="sport">Sport</option>
							<option value="gaming">Gaming</option>
							<option value="travels">Travels</option>
							<option value="altro">Altro</option>
						</select>
					</label>

					<button className="postButton" type="submit">
						{isEditing ? "Salva" : "Pubblica"}
					</button>
					<button onClick={onCancel} className="repeal">
						Annulla
					</button>
				</form>
			</div>
		</div>
	);
};
