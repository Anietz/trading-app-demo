import React, { FunctionComponent } from 'react';
import {FormInputProps} from './types';
import './FormInput.css';

const FormInput: FunctionComponent<FormInputProps> = ({value,max,min,pattern,styleContainer,label,id,name,type,onChange,style,placeholder} ) =>{

    return (
        <>
           <div className="input-block" style={styleContainer}>
               {label && <label htmlFor={id} className="input-label">{label}</label>}
               <input value={value} maxLength={max} minLength={min} pattern={pattern} id={id}  name={name} type={type} onChange={onChange} style={style} placeholder={placeholder} />
           </div>
        </>
    )

};

export default FormInput;