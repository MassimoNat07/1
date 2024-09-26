import { useLocalStorageState } from "../../hooks/useLocalStorageState";

import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom"; // Importa useParams
import { Post } from "../../types/types";

export function CatergoryPage() {
	const { category } = useParams();
	const [posts] = useLocalStorageState<Post[]>("posts", []);

	const filteredPosts = posts.filter((p) => p.categories === category);

	return (
		<>
			<div className="containerDash">z
				<div className="posts-container">
					{filteredPosts.map((post, index) => (
						<div className="post-card" key={index}>
							{post.user ? (
								<div className="user-name">
									<p>
										<CgProfile />
										{`${post.user.username} ${post.user.surname}`}
									</p>
								</div>
							) : null}

							<p>Titolo: {post.title} </p>
							<p className="describe-post">Descrizione: {post.description}</p>
							<p>Categoria: {post.categories}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
