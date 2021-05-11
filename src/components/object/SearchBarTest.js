import React from 'react';
import {useForm} from "react-hook-form";
import FormInputComponent from "../forms/FormInputComponent";



function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const onSubmit = data => {
        console.log(data)
    };





    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="searchBarForm">

                <fieldset className="formField">
                    <h2 className="formHeader">SEARCH</h2>



                    <FormInputComponent
                        type="text"
                        className="signUpField"
                        name="areaCode"
                        placeHolder="Please insert your areaCode (for example: 1066SP)"
                        fieldRef={register('areaCode', {
                            pattern: {
                                value: /([0-9]{4}[A-Z]{2})/,
                                message: 'Please insert a valid area code (with caps)',
                            },
                        })}
                        errors={errors}
                    />

                    <FormInputComponent
                        type="text"
                        className="signUpField"
                        name="guild"
                        placeHolder="Choose your guild"
                        fieldRef={register('guild', {
                            minLength: {
                                value: 2,
                                message: 'At least 2 characters must be used to define the last name',
                            },
                            maxLength: {
                                value: 25,
                                message: 'At most 25 characters can be used to define the last name',
                            },
                        })}
                        errors={errors}
                    />

                    <FormInputComponent
                        type="text"
                        className="signUpField"
                        name="name"
                        placeHolder="Find your product"
                        fieldRef={register('name', {
                            minLength: {
                                value: 2,
                                message: 'At least 2 characters must be used to define the last name',
                            },
                            maxLength: {
                                value: 15,
                                message: 'At most 15 characters can be used to define the last name',
                            },
                        })}
                        errors={errors}
                    />

                    <button
                        type="submit"
                        className="logInField"
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> FIND ITEMS
                    </button>
                </fieldset>
            </form>


        </>
    )
}

export default LogInForm