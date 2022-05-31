import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Header.module.css";

interface IHeaderProps {}
interface IHeaderState {}

const initialState: IHeaderState = {};

const Header: React.FC<IHeaderProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.Header} data-testid="Header">
      <h1>drôle de meme </h1>
    </div>
  );
};

Header.propTypes = {};

export default Header;
