import React,{FunctionComponent} from "react";
import { ButtonProps, ButtonTypes  } from "./types";
import "./Button.css";

const Button:FunctionComponent<ButtonProps> = ({ onClick,isActive,type,style,children,disabled }) => {
    const populateClassName = () => {
        let className = "button";
        if (isActive) {
            className += " active";
        }

        switch(type){
            case ButtonTypes.primaryOutline:
                className += " primary-btn primary-btn-outline";
                break;
            case ButtonTypes.primary:
            default:
                className += " primary-btn";
                break;
        }
    
        return className;
    }
    return (
        <button disabled={disabled}  className={populateClassName() } style={style}  onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;