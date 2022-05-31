import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./TemplateName.module.css";

interface ITemplateNameProps {}
interface ITemplateNameState {}

const initialState: ITemplateNameState = {};

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};

TemplateName.propTypes = {};

export default TemplateName;
