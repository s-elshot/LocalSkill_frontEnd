import React from 'react';

function FormInputComponent({type, name, placeHolder,fieldRef, className, errors,}) {

    return (
        <>
            <label htmlFor="formItems">
                <input
                    type={type}
                    name={name}
                    className={className}
                    id={name}
                    placeholder={placeHolder}
                    {...fieldRef}
                />
                {errors[name] && <span id="signUpError"> {errors[name].message}</span>}
            </label>
        </>
    )
}

export default FormInputComponent