import { useState } from "react";
import { ImCross } from "react-icons/im";
import "./ProfilePage.css";

import { Form } from "../../components/Form/Form";
import { Post } from "../../types/types";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const ProfilePage = () => {
	const [posts, setPosts] = useLocalStorageState<Post[]>("posts", []);
	const [editingPostIndex, setEditingPostIndex] = useState<number | null>(null);
	const { user } = useContext(CurrentUserContext);

	const addPost = (newPost: Post) => {
		setPosts([...posts, { ...newPost, user }]);
	};

	const saveEditedPost = (editedPostData: Post) => {
		const updatedPosts = [...posts];
		updatedPosts[editingPostIndex!] = editedPostData;
		setPosts(updatedPosts);
		setEditingPostIndex(null);
		localStorage.setItem("posts", JSON.stringify(updatedPosts));
	};

	const removePost = (post: Post) => {
		const confirmDelete = window.confirm(" sei sicuro di voler cancellare il post?");
		if (confirmDelete) {
			const updatedPosts = posts.filter((item: Post) => item !== post);
			setPosts(updatedPosts);
			localStorage.setItem("posts", JSON.stringify(updatedPosts));
		}
	};

	const filteredPosts = posts.filter((p) => p.user?.username === user?.username);

	if (!user) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<CreatePost addPost={addPost} />

			<div className="post-wrapper">
				{filteredPosts.map((post: Post, index: number) => {
					return (
						<div key={index}>
							{editingPostIndex === index ? (
								<Form
									onSubmit={(editedData: Post) => saveEditedPost(editedData)}
									onCancel={() => setEditingPostIndex(null)}
									initialValues={{
										title: post.title,
										description: post.description,
										categories: post.categories,
									}}
									isEditing
								/>
							) : (
								<div className="post-cards">
									<div className="post-item">
										<button className="remove-button">
											<ImCross onClick={() => removePost(post)} />
										</button>
										<p>Titolo:{`${post.title}`}</p>
										<p className="description-item">Descrizione:{`${post.description}`}</p>
										<p>Categoria: {`${post.categories}`}</p>
									</div>

									<button className="edit-button" onClick={() => setEditingPostIndex(index)}>
										Modifica
									</button>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
