import React, { ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";
import style from "./TemplateName.module.css";

interface ITemplateNameProps {
  children: string | Array<ReactNode> | ReactElement;
}

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

TemplateName.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default TemplateName;
