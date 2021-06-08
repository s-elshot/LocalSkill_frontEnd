import React from 'react';
import {useForm} from "react-hook-form";
import styles from './LogInForm.module.css';
import FormInputComponent from "./FormInputComponent";
// import formPeople from "../../assets/backgrounds/logIn.png";
import guy from "../../assets/desktop/backgrounds/logIn.png";


function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const onSubmit = data => {
        console.log(data)
    };




    return (
        <div className={styles.container}>
            <img className={styles.signUpBackGround} src={guy} alt={guy}/>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.logInFormBase}>

                <fieldset className={styles.formField}>
                    <h2 className={styles.formHeader}>LOG IN</h2>



                    <FormInputComponent
                        type="text"
                        name="formUserName"
                        className={styles.logInField}
                        placeHolder="Username"
                        fieldRef={register('formUserName', {
                            required: {
                                value: true,
                                message: 'This field must have input',
                            }
                            , maxLength: {
                                value: 30,
                                message: 'At most 30 characters can be used to define the first name',
                            }
                        })}
                        errors={errors}
                    />


                    <FormInputComponent
                        type="password"
                        name="formPassword"
                        className={styles.logInField}
                        placeHolder="Password"
                        fieldRef={register('formPassword', {
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
                        errors={errors}
                    />

                    <FormInputComponent
                        type="password"
                        name="repeatFormPassword"
                        className={styles.logInField}
                        placeHolder="Repeat your password"
                        fieldRef={register('repeatFormPassword', {
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
                        errors={errors}
                    />

                    <button
                        type="submit"
                        className={styles.confirmButton}
                        id="confirmButton"
                        name="submitButton"
                        disabled={pristine}> LOG IN
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default LogInForm