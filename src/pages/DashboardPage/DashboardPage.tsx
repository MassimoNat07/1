import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { Post } from "../../types/types";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { CreatePost } from "../../components/CreatePost/CreatePost";
import "./DashboardPage.css";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export const DashboardPage = () => {
  const [posts, setPosts] = useLocalStorageState<Post[]>("posts", []);
  const { user } = useContext(CurrentUserContext);
  const [search, setSearch] = useState("");

  const addPost = (newPost: Post) => {
    setPosts([...posts, { ...newPost, user }]);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.user?.username?.toLowerCase().includes(search.toLowerCase()) ||
      post.user?.surname?.toLowerCase().includes(search.toLowerCase()) ||
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search a post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </div>
      <CreatePost addPost={addPost} />

      <div className="containerDash">
        <div className="posts-container">
          {filteredPosts.map((post: Post, index: number) => (
            <div className="post-card" key={index}>
              <div className="user-name">
                <p>
                  <CgProfile />
                  {`${post.user?.username} ${post.user?.surname}`}
                </p>
              </div>

              <p>Titolo: {post.title} </p>
              <p className="describe-post"> Descrizione: {post.description}</p>
              <p>Categoria: {post.categories}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
