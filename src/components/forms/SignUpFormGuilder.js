import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './SignUpForm.css';
import axios from "axios";
import {useHistory} from "react-router-dom"
import FormInputComponent from "./FormInputComponent";

// import FormInputComponent from "./FormInputComponent";

// import lampMan from "../../assets/backgrounds/Image.png";


function SignUpFormGuilder() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory();

    // const onSubmit = data => {
    //     console.log(data)
    // };


    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            const result = await axios.post("http://localhost:3000/SignUpForm",
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
            setTimeout(() => {
                history.push("http://localhost:3000");
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



                        <FormInputComponent
                            type="text"
                            name="firstName"
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

                        <FormInputComponent
                            type="text"
                            className="signUpField"
                            name="lastName"
                            placeHolder="Last name"
                            fieldRef={register('lastName', {
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
                            errors={errors}
                        />

                        <FormInputComponent
                            type="number"
                            className="signUpField"
                            name="age"
                            placeHolder="Age"
                            fieldRef={register('age', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                min: {
                                    value: 12,
                                    message: 'You must be at least 12 to visit this website',
                                }
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="text"
                            className="signUpField"
                            name="email"
                            placeHolder="Email (for example: Email@gmail.com)"
                            fieldRef={register('email', {
                                required: {
                                    value: true,
                                    message: 'This field cant be empty',
                                },
                                pattern: {
                                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                    message: 'Please insert a valid email-adress',
                                },
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="text"
                            className="signUpField"
                            name="email"
                            placeHolder="AreaCode (for example: 1066SP)"
                            fieldRef={register('areaCode', {
                                required: {
                                    value: true,
                                    message: 'This field must have an input',
                                },
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
                        name="city"
                        placeHolder="city (for example: Amsterdam)"
                        fieldRef={register('city', {
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
                        errors={errors}
                    />

                    <FormInputComponent
                        type="text"
                        className="signUpField"
                        name="password"
                        placeHolder="Please choose an Password"
                        fieldRef={register('password', {
                            required: {
                                value: true,
                                message: 'This field must have input',
                            },
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
                        name="repeatedPassword"
                        placeHolder="Please repeat your password"
                        fieldRef={register('repeatedPassword', {
                            required: {
                                value: true,
                                message: 'This field must have input',
                            },
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
                        name="guild"
                        placeHolder="Choose your guild"
                        fieldRef={register('guild', {
                            required: {
                                value: true,
                                message: 'This field must have input',
                            },
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

export default SignUpFormGuilder