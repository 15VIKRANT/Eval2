import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: "red", textDecoration: "none" };
  return (
    <nav style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/register/one"
      >
        Register =
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/register/two"
      >
        Second Step =
      </NavLink>

     
    </nav>
  );
};

export default Navbar;
