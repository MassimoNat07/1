import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { UserData } from "../../types/types";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./Header.css";

export function Header() {
  const [userData, setUserData] = useLocalStorageState<UserData | undefined>(
    "formData",
    undefined
  );

  return (
    <CurrentUserContext.Provider
      value={{ user: userData, setUser: setUserData }}
    >
      <header className="header">
        {userData && (
          <div className="sidebarProfile">
            <nav>
              <Link to="/profile">
                <CgProfile />

                <p>
                  {userData.username} {userData.surname}
                </p>
              </Link>
            </nav>
          </div>
        )}

        <Link to={userData ? "/dashboard" : "/"}>
          <h1>Find The Dreamers</h1>
        </Link>
      </header>

      <main>
        <Outlet />
      </main>
    </CurrentUserContext.Provider>
  );
}
