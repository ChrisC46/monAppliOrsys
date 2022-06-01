import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

interface IHeaderProps {}
interface IHeaderState {}

const initialState: IHeaderState = {};

const Header: React.FC<IHeaderProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.Header} data-testid="Header">
      <Link to="/">Home</Link> | <Link to="/editor">New Meme</Link> | <Link to="/thumbnail">Thumbnail</Link>
    </div>
  );
};

Header.propTypes = {};

export default Header;
