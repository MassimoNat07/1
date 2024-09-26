import { useState } from "react";
import { Post } from "../../types/types";
import { Form } from "../Form/Form";
import "./CreatePost.css";

type ComponentProps = {
	addPost: (newPost: Post) => void;
};

export function CreatePost({ addPost }: ComponentProps) {
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const onSubmit = (data: Post) => {
		addPost(data);
		setShowForm(!showForm);
	};

	return (
		<>
			<button className="showFormButton" onClick={toggleForm}>
				<p>Create</p> <p>Post</p>
			</button>

			{showForm && (
				<div className="form-overlay">
					<Form onSubmit={onSubmit} onCancel={() => setShowForm(false)} />
				</div>
			)}
		</>
	);
}
