import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./NavBar.module.css";

interface INavBarProps {}
interface INavBarState {}

const initialState: INavBarState = {};

const NavBar: React.FC<INavBarProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.NavBar} data-testid="NavBar">
      NavBar
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
