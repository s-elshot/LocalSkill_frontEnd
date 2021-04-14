import React from 'react';
import {useForm} from "react-hook-form";
import './LogInForm.css';
// import FormFieldComponent from "./FormFieldComponent";

function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="logInForm">

                <fieldset className="formField">
                    <h2>LOG IN</h2>
                    <label htmlFor="formItems">
                        <input
                            // className={}
                            type="text"
                            className="logInField"
                            name="formUserName"
                            id="formUserName"
                            placeholder="username"
                            {...register('formUserName', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                }
                                , minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the first name',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the first name',
                                }
                            })}
                        />
                        {errors.formUserName && (<span id="signUpError">{errors.formUserName.message}</span>)}
                    </label>


                    <label htmlFor="formItems">
                        <input
                            // className={}
                            type="password"
                            className="logInField"
                            name="formPassword"
                            id="formPassword"
                            placeholder="password"
                            {...register('formPassword', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                }
                                , minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the first name',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the first name',
                                }
                            })}
                        />
                        {errors.formPassword && (<span id="signUpError">{errors.formPassword.message}</span>)}
                    </label>

                    {/*<FormFieldComponent*/}
                    {/*    fieldName="Password"*/}
                    {/*    type="password"*/}
                    {/*    className="logInField"*/}
                    {/*    name="formPassword"*/}
                    {/*    placeHolder="Insert password"*/}
                    {/*    errorCheck=""*/}
                    {/*    errorMessage=""*/}
                    {/*/>*/}

                    <button
                        type="submit"
                        className="logInField"
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> LOG IN

                    </button>
                </fieldset>
            </form>


        </>
    )
}

export default LogInForm