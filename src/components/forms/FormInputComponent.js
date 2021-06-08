import React from 'react';
import styles from "./FormInputComponent.module.css"
function FormInputComponent({type,step, name, placeHolder,fieldRef, className, errors,}) {

    return (
        <>
            <label htmlFor="formItems">
                <input
                    type={type}
                    name={name}
                    step={step}
                    className={className}
                    id={name}
                    placeholder={placeHolder}
                    {...fieldRef}
                />
                {errors[name] && <span id="signUpError" className={styles.error}> {errors[name].message}</span>}
            </label>
        </>
    )
}

export default FormInputComponent