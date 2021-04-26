import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './SignUpForm.css';
import axios from "axios";
import {useHistory} from "react-router-dom"
import FormFieldComponent from "./FormFieldComponent";
import SignUpFormInputComponent from "./SignUpFormInputComponent";

// import lampMan from "../../assets/backgrounds/Image.png";


function ProductForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces]= useState(false)
    const history = useHistory();

    // const onSubmit = data => {
    //     console.log(data)
    // };


    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            const result = await axios.post("http://localhost:3000/signUp",
                {
                    email: data.email,
                    password: data.password,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    age: data.age,
                    areaCode: data.areaCode,
                })
            console.log(result)
            toggleRegisterSucces(true)
            setTimeout(()=>{
                history.push("http://localhost:3001/logIn");
            }, 2000)

        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    return (
        <>

            {/*<img className="signUpBackground" src={lampMan} alt="lampMan"/>*/}
            <form onSubmit={handleSubmit(onSubmit)}
                  className="signUpFormBase">

                <fieldset className="signUpForm">
                    <h2 className="formHeader">SIGN UP</h2>

                    <SignUpFormInputComponent
                        type="text"
                        name="repeatFormPassword"
                        className="signUpField"
                        placeHolder="First name"
                        fieldRef={register('firstName', {
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
                        errors={errors}
                    />

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

                    <label htmlFor="password">
                        <input type="text"
                               className="signUpField"
                               name="firstName"
                               id="password"
                               placeholder="password"
                               {...register('password', {
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
                        {errors.password && (<span id="signUpError">{errors.password.message}</span>)}
                    </label>



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
                               placeholder="Email (for example: Email@gmail.com)"
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
                               placeholder="AreaCode (for example: 1066SP)"
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

                    {registerSucces === true &&
                    <span>Sign up succeeded</span>}

                    {loading === true &&
                    <span>Loading...</span>}


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

export default ProductForm