import React, { ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";
import style from "./FlexLayout.module.css";

interface IFlexLayoutProps {
  children: string | Array<ReactNode> | ReactElement;
}

const FlexLayout: React.FC<IFlexLayoutProps> = (props) => {
  return (
    <div className={style.FlexLayout} data-testid="FlexLayout">
      {props.children}
    </div>
  );
};

FlexLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default FlexLayout;
