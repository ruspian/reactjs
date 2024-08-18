// outlet untuk menampilkan komponen yang ada di dalamnya
import { NavLink, Outlet } from "react-router-dom";

import "../style/style.css";

const RootLayout = () => {
  return (
    <>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about"
      >
        About
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/blog"
      >
        Blog
      </NavLink>
      <hr />
      <hr />
      <Outlet />
    </>
  );
};

export default RootLayout;
