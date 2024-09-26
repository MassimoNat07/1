import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { Post } from "../../types/types";

export function CatergoryPage() {
  const { category } = useParams();
  const [posts] = useLocalStorageState<Post[]>("posts", []);

  const filteredPosts = posts
    .filter((post) => post.categories === category)
    .map((post, index) => (
      <div className="post-card" key={index}>           
        {post.user && (
          <div className="user-name">
            <p>
              <CgProfile />
              {`${post.user.username} ${post.user.surname}`}
            </p>
          </div>
        )}

        <p>Titolo: {post.title} </p>
        <p className="describe-post">Descrizione: {post.description}</p>
        <p>Categoria: {post.categories}</p>
      </div>
    ));

  return (
    <>
      <div className="containerDash">
        <div className="posts-container">{filteredPosts}</div>
      </div>
    </>
  );
}
