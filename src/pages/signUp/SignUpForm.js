import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom"
import FormInputComponent from "../../components/forms/FormInputComponent";
import axios from "axios";
import womenWithGlasses from "../../assets/mobileIcons/pexels-photo-5915140.png";
import styles from "../../components/forms/SignUpForm.module.css";

function SignUpForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);

    const history = useHistory();

    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            await axios.post(
                "http://localhost:8080/customer"
                // "http://localhost:3000/register"
                , {
                // method: "POST",
                // headers: {"Content-Type": "application/json"},
                body: JSON.stringify,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                areaCode: data.areaCode,
                city: data.city,
                guild: data.guild,
                password: data.password,
                userRole: data.userRole
            }).then(() => {
                console.log("New customer added")

            })
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("/");
            }, 2000)

        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    return (
        <div className={styles.container}>

            {/*<img className="signUpBackground" src={lampMan} alt="lampMan"/>*/}
            <img className={styles.backgroundImage} src={womenWithGlasses} alt={womenWithGlasses}/>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles.signUpFormBase}>

                <fieldset className={styles.signUpForm}>
                    <h2 className={styles.formHeader}>SIGN UP</h2>

                    <label htmlFor="userRole" id="radioSelector" className={styles.radio} {...register("userRole", {required: true, message: 'This field must have input' })}>
                        <input className={styles.input} type="radio" name="userRole" id="customer"  {...register("userRole")}
                               value="CUSTOMER"/> Customer
                        <input className={styles.input}  type="radio" name="userRole" id="guilder"  {...register("userRole")} value="GUILDER"/>Guilder
                    </label>


                    <FormInputComponent
                        type="text"
                        name="firstName"
                        className={styles.signUpField}
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
                        className={styles.signUpField}
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

                    {/*<FormInputComponent*/}
                    {/*    type="number"*/}
                    {/*    className="signUpField"*/}
                    {/*    name="age"*/}
                    {/*    placeHolder="Age"*/}
                    {/*    fieldRef={register('age', {*/}
                    {/*        required: {*/}
                    {/*            value: true,*/}
                    {/*            message: 'This field must have input',*/}
                    {/*        },*/}
                    {/*        min: {*/}
                    {/*            value: 12,*/}
                    {/*            message: 'You must be at least 12 to visit this website',*/}
                    {/*        }*/}
                    {/*    })}*/}
                    {/*    errors={errors}*/}
                    {/*/>*/}

                    <FormInputComponent
                        type="text"
                        className={styles.signUpField}
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
                        className={styles.signUpField}
                        name="areaCode"
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
                        className={styles.signUpField}
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
                        className={styles.signUpField}
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

                    <FormInputComponent
                        type="password"
                        className={styles.signUpField}
                        name="password"
                        placeHolder="Please choose a password"
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

                    {/*<FormInputComponent*/}
                    {/*    type="text"*/}
                    {/*    className="signUpField"*/}
                    {/*    name="repeatedPassword"*/}
                    {/*    placeHolder="Please repeat your password"*/}
                    {/*    fieldRef={register('repeatedPassword', {*/}
                    {/*        required: {*/}
                    {/*            value: true,*/}
                    {/*            message: 'This field must have input',*/}
                    {/*        },*/}
                    {/*        minLength: {*/}
                    {/*            value: 2,*/}
                    {/*            message: 'At least 2 characters must be used to define the last name',*/}
                    {/*        },*/}
                    {/*        maxLength: {*/}
                    {/*            value: 25,*/}
                    {/*            message: 'At most 25 characters can be used to define the last name',*/}
                    {/*        },*/}
                    {/*    })}*/}
                    {/*    errors={errors}*/}
                    {/*/>*/}

                    {loading === true &&
                    <span>
                        <button
                            type="submit"
                            id="confirmButton"
                            className={styles.confirmButton}
                            name="submitButton"
                            disabled={pristine}>LOADING..
                        </button>
                    </span>
                    }

                    {registerSucces === true &&
                    <span>SIGN UP SUCCEEDED</span>}

                    <button
                        type="submit"
                        className={styles.confirmButton}
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> SIGN UP
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default SignUpForm