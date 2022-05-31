import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Footer.module.css";

interface IFooterProps {}
interface IFooterState {}

const initialState: IFooterState = {};

const Footer: React.FC<IFooterProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.Footer} data-testid="Footer">
      Footer
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
