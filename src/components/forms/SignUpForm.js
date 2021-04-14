import React from 'react';
import {useForm} from "react-hook-form";
import './SignUpForm.css';

function SignUpForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <fieldset className="signUpForm">
                    <h2>SIGN UP</h2>
                    {/*component???*/}
                    <label htmlFor="firstName">
                        <input type="text"
                               className="signUpField"
                               name="firstName"
                               id="firstName"
                               placeholder="First name"
                               {...register('firstName', {
                                   required: {
                                       value: true,
                                       message: 'This field must have input',
                                   },
                                   minLength: {
                                       value: 2,
                                       message: 'At least 2 characters must be used to define the first name',
                                   },
                                   maxLength: {
                                       value: 15,
                                       message: 'At most 15 characters can be used to define the first name',
                                   },
                               })}
                        />
                        {errors.firstName && (<span id="signUpError">{errors.firstName.message}</span>)}
                    </label>

                    {/*component???*/}
                    <label htmlFor="lastName">
                        <input type="text"
                               className="signUpField"
                               name="lastName"
                               placeholder="Last name"
                               id="lastName"
                               {...register('lastName', {
                                   required: {
                                       value: true,
                                       message: 'This field must have input',
                                   },
                                   minLength: {
                                       value: 2,
                                       message: 'At least 2 characters must be used to define the last name',
                                   },
                                   maxLength: {
                                       value: 15,
                                       message: 'At most 15 characters can be used to define the last name',
                                   },
                               })}
                        />
                        {errors.lastName && (<span id="signUpError">{errors.lastName.message}</span>)}
                    </label>

                    {/*component???*/}
                    <label htmlFor="age">
                        <input type="number"
                               className="signUpField"
                               name="age"
                               placeholder="Age"
                               id="age"
                               {...register('age', {
                                   required: {
                                       value: true,
                                       message: 'This field must have input',
                                   },
                                   min: {
                                       value: 12,
                                       message: 'You must be at least 12 to visit this website',
                                   }
                               })}
                        />
                        {errors.age && (<span id="signUpError">{errors.age.message}</span>)}
                    </label>

                    {/*component???*/}
                    <label htmlFor="emailAdress">
                        <input type="email"
                               className="signUpField"
                               name="email"
                               id="email"
                               placeholder="Email@gmail.com"
                               {...register('email', {
                                   required: {
                                       value: true,
                                       message: 'This field cant be empty',
                                   },
                                   pattern: {
                                       value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                       message: 'Please insert a valid email-adress',
                                   },
                               })}
                        />
                        {errors.email && (<span id="signUpError">{errors.email.message}</span>)}
                    </label>

                    {/*component???*/}
                    <label htmlFor="areaCode">
                        <input type="text"
                               className="signUpField"
                               name="areaCode"
                               id="areaCode"
                               placeholder="AreaCode (e.g 1066SP)"
                               {...register('areaCode', {
                                   required: {
                                       value: true,
                                       message: 'This field must have an input',
                                   },
                                   pattern: {
                                       value: /([0-9]{4}[A-Z]{2})/,
                                       message: 'Please insert a valid area code (with caps)',
                                   },
                               })}
                        />
                        {errors.areaCode && (<span id="signUpError">{errors.areaCode.message}</span>)}
                    </label>


                    <button
                        type="submit"
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> SIGN UP
                    </button>

                </fieldset>

            </form>

        </>
    )
}

export default SignUpForm