import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="container_navbar">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Link to="/charts">
          <button>Charts</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
