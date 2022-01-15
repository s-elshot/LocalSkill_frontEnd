import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {NavLink, useHistory} from "react-router-dom"
import FormInputComponent from "../../components/forms/FormInputComponent";
import axios from "axios";
import womenWithGlasses from "../../assets/mobileIcons/pexels-photo-5915140.png";
import styles from "./SignUpForm.module.css";

function SignUpForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        toggleLoading(true)
        try {
            await axios.post(
                "http://localhost:8080/api/auth/signup"
                , {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    role: ["user"],
                    areaCode: data.areaCode,
                    city: data.city,
                    customerGuild: data.customerGuild,
                    password: data.password,
                    userRole: "GUILDER",

                }).then(() => {
                console.log("New customer added")

            })
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("logIn");
            }, 1000)

        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    return (
        <div className={styles.container}>

            <img className={styles.backgroundImage} src={womenWithGlasses} alt={womenWithGlasses}/>

            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles.signUpFormBase}>

                <fieldset className={styles.signUpForm}>
                    <h2 className={styles.formHeader}>SIGN UP AS GUILDER</h2>
                    <div className={styles.button}>
                        <NavLink to="/signUpCustomer">SIGN UP AS CUSTOMER ? </NavLink>
                    </div>
                    <label htmlFor="formItems">
                        <select name="customerGuild" {...register("customerGuild", {validate: (value) => value !== ""})}
                                className={styles.select}>
                            <option value="">Please choose an Guild....</option>
                            <option value="FINANCE">Finance</option>
                            <option value="CONSTRUCTION">Construction</option>
                            <option value="CREATIVE_DESIGN">Creative design</option>
                            <option value="LEISURE">Leisure</option>
                            <option value="MEDIA">Media</option>
                            <option value="SECURITY">Security</option>
                            <option value="HEALTHCARE">Healthcare</option>
                            <option value="IT">IT</option>
                            <option value="BEAUTY">Beauty</option>
                            <option value="SPORT">Sport</option>
                            <option value="FOOD">Food</option>
                            <option value="HOBBY">Hobby</option>
                            <option value="SALES">Sales</option>
                            <option value="EDUCATION">Education</option>
                            <option value="LOGISTICS">Logistics</option>
                            <option value="LEGAL">Legal</option>
                            <option value="HUMAN_RESOURCES">Human resources</option>
                            <option value="IT">IT</option>
                            <option value="BEAUTY">Beauty</option>
                            <option value="SPORT">Sport</option>
                            <option value="FOOD">Food</option>
                            <option value="HOBBY">Hobby</option>
                            <option value="SALES">Sales</option>
                            <option value="EDUCATION">Education</option>
                            <option value="HEALTHCARE">Healthcare</option>
                        </select>
                        {errors.customerGuild && <span className={styles.errors}>Please specify an input..</span>}
                    </label>

                    <FormInputComponent
                        type="text"
                        className={styles.signUpField}
                        name="username"
                        placeHolder="Please choose an username"
                        fieldRef={register('username', {
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
                                value: 100,
                                message: 'At most 100 characters can be used to define the last name',
                            },
                        })}
                        errors={errors}
                    />

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