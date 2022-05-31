import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.css";

interface IMemeFormProps {}
interface IMemeFormState {}

const initialState: IMemeFormState = {};

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const [state, setstate] = useState(initialState);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      MemeForm
    </div>
  );
};

MemeForm.propTypes = {};

export default MemeForm;
