import React, {FunctionComponent} from "react";
import "./LoginModal.css";
import {ModalProps} from "./types";
import Button from "../Button";
import FormInput,{FormInputType} from "../FormInput";


const Modal:FunctionComponent<ModalProps> = ({isOpen,handleClose}) => {

    return (
        <>
         {<div className={isOpen ? 'modal is-open': 'hide' }>
            <div className="modal-container">
                <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Login to start trading.</p>
                <FormInput type={FormInputType.email} onChange={()=>{}} id="email" 
                name="email" placeholder="Enter your email" label="Email"  />
                
                <FormInput type={FormInputType.password} onChange={()=>{}} id="password" 
                name="password" placeholder="Enter your password" label="Password"  />

                <div className="modal-buttons">
                    <a href="#forgot">Forgot your password?</a> 
                    <Button style={{
                        padding: "8px 12px",
                        borderRadius: "4px",
                        transition: "0.3s",
                        fontSize: "1.2rem",
                        fontWeight:"100"
                    }} isActive={true} onClick={()=>{alert("logging in")}} >
                        Login
                    </Button>
                </div>
                <p className="sign-up">Don't have an account? <a href="#signup">Sign up now</a></p>
                </div>
                <div className="modal-right">
                <img src="images/bgg.jpg" alt=""/>
                </div>
                <button className="icon-button close-button" onClick={()=>{handleClose()} }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
                    </svg>
                </button>
            </div>
            </div>
            }
        </>
    )
}

export default Modal;