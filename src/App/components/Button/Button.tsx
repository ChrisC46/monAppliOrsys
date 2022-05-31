import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

interface iButtonProps {
    type?: 'button'|'submit'|'reset',
    action ?: Function,
    children:React.ReactElement| Array<React.ReactNode>|string,
    bgColor?:string,
    color?:string,
    className?:string,
    style?: object,
}

const Button:React.FunctionComponent<iButtonProps>=(props) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    }
  }, [isClicked]);

  return (
    <button
      className={`${style.Button}${
        props.className ? " " + props.className : ""
      }${isClicked ? " " + style.clicked : ""}`}
      type={props.type}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      onClick={(event) => {
        setIsClicked(true);
        console.log("isClicked :", isClicked);
        if(props.action && typeof props.action==='function'){
            props.action();
        };
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button','submit','reset']),
  action: PropTypes.func,
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "button",
  bgColor: "lime",
  color: "white",
};

export default Button;

export const WarningButton:React.FunctionComponent<iButtonProps>=(props) => {
  return <Button {...props} bgColor="tomato"></Button>;
}

export const DefaultButton:React.FunctionComponent<iButtonProps>=(props) => {
  return <Button {...props} bgColor="blue"></Button>;
}
