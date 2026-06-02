import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <span>a</span>
        <p>Abed</p>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;