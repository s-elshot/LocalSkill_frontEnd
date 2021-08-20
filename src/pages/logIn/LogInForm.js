import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import styles from './LogInForm.module.css';
import FormInputComponent from "../../components/forms/FormInputComponent";
import guy from "../../assets/desktop/backgrounds/logIn.png";
import axios from "axios";
import {UserContext} from "../../context/UserContext";
// import LogInButton from "../../components/logIn/LoginButton";
import {useHistory} from "react-router-dom";

function LogInForm() {

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false);
    const history = useHistory();
    const {toggleSignedIn, setUserLogIn} = useContext(UserContext)


    async function onSubmit(data) {
        console.log(data)
        // console.log(data.username)
        setUserLogIn(data.username)
        toggleSignedIn(false)
        try {
             // await axios.post("http://localhost:3000/login",data)
            await axios.post("http://localhost:8080/api/auth/signin",data)

            // logIn(result.data.accessToken)
            // place jwt in local storage

            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("homepage");
            }, 1000)

            // no time-out: redirect immediately to new page
            // place jwt in local storage
            toggleSignedIn(true)
        } catch (e) {
            console.error(e)
        }


    }

    return (
        <div className={styles.container}>
            <img className={styles.signUpBackGround} src={guy} alt={guy}/>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.logInFormBase}>

                <fieldset className={styles.formField}>
                    <h2 className={styles.formHeader}>LOG IN</h2>

                    <FormInputComponent
                        type="text"
                        name="username"
                        className={styles.logInField}
                        placeHolder="Username"
                        fieldRef= {register('username', {
                            required: {
                                value: true,
                                message: 'This field must have input',
                            },
                            pattern: {
                                value: /^[A-Z].*$/,
                                message: 'Username must start with capital letter',
                            }
                        })}
                        errors={errors}
                    />


                    <FormInputComponent
                        type="password"
                        name="password"
                        className={styles.logInField}
                        placeHolder="Password"
                        fieldRef= {register('password', {
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
                    {registerSucces === true &&
                    <p>INLOG SUCCEEDED, REDIRECTING TO HOME</p>
                    }

                </fieldset>
            </form>
            {/*<LogInButton/>*/}
        </div>
    )
}

export default LogInForm