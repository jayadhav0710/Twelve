import React, { useContext } from "react";
import ThemeContext from "../Context";
import { Link } from "react-router-dom";

const Main = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <h4>Geekster</h4>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/service">Service</Link>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        Toggle  {isLight ? "Dark" : "Light"}
      </button>
    </>
  );
};

export default Main;