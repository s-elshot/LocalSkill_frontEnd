import React, {Fragment, useState} from 'react';
import styles from "../userDetails/UserDetails.module.css";
import background from "../../../assets/desktop/backgrounds/pexels-profile.png";
import FormInputComponent from "../../../components/forms/FormInputComponent";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";





function UserDetails() {



    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);

    const history = useHistory();

    const userId = 2;
    // const val = users.find(user => {
    //     return user.id === userId
    // })

    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            await axios.put(`http://localhost:8080/customer/${userId}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify,
                // const result = await axios.post("http://localhost:8080/customer",
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                emailAdress: data.emailAdress,
                areaCode: data.areaCode,
                city: data.city,
                guild: data.guild,
                password: data.password,
                userRole: data.userRole

            }).then(() => {
                console.log("Customer edited")

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
        <Fragment>
            <div className={styles.container}>
                <img src={background} className={styles.background} alt={background}/>

                <form onSubmit={handleSubmit(onSubmit)}
                      className={styles.signUpFormBase}>


                    <fieldset className={styles.signUpForm}>
                        <h2 className={styles.formHeader}>EDIT ACCOUNT</h2>

                        <label htmlFor="userRole" id="radioSelector" className={styles.radio}>
                            <input className={styles.input} type="radio" name="userRole" id="customer"  {...register("userRole")}
                                   value="CUSTOMER"/> Customer
                            <input className={styles.input}  type="radio" name="userRole" id="guilder"  {...register("userRole")} value="GUILDER"/>Guilder
                        </label>


                        <FormInputComponent
                            type="text"
                            name="firstName"
                            className={styles.signUpField}
                            placeHolder="Edit first name"
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
                            placeHolder="Edit last name"
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
                            name="emailAdress"
                            placeHolder="Edit email (for example: Email@gmail.com)"
                            fieldRef={register('emailAdress', {
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
                            placeHolder="Edit AreaCode (for example: 1066SP)"
                            fieldRef={register('areaCode', {
                                required: {
                                    value: false,
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
                            placeHolder="Edit city (for example: Amsterdam)"
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
                            placeHolder="Edit guild"
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
                            placeHolder="Edit password"
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
                        <span>PROFILE EDIT SUCCEEDED</span>}

                        <button
                            type="submit"
                            className={styles.confirmButton}
                            id="confirmButton"
                            name="submitButton"
                            disabled={pristine}> CONFIRM ALTERATIONS
                        </button>
                    </fieldset>
                </form>
            </div>
        </Fragment>
    );
}

export default UserDetails;