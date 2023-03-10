import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand ms-3">Note App</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/" exact="true">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
