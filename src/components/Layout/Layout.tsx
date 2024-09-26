import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Layout.css";


export function Layout() {
	return (
    <>
      <div className="container">
        <div className="sidebar">
          <h2>Categorie </h2>
          <nav>
            <ul>
              <li >
                <Link to="/dashboard/art">Art</Link>
              </li>
              <li>
                <Link to="/dashboard/coding">Coding</Link>
              </li>
              <li>
                <Link to="/dashboard/gardening">Gardening</Link>
              </li>
              <li>
                <Link to="/dashboard/business">Business</Link>
              </li>
              <li>
                <Link to="/dashboard/catering">Catering</Link>
              </li>
              <li>
                <Link to="/dashboard/studio">Studio</Link>
              </li>
              <li>
                <Link to="/dashboard/technologies">Technologies</Link>
              </li>
              <li>
                <Link to="/dashboard/sport">Sport</Link>
              </li>
              <li>
                <Link to="/dashboard/gaming">Gaming</Link>
              </li>
              <li>
                <Link to="/dashboard/travels">Travels</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
