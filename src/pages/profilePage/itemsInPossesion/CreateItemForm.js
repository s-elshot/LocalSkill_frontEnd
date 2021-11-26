import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import styles from './CreateItemForm.module.css';
import axios from "axios";

import FormInputComponent from "../../../components/forms/FormInputComponent";
import {useHistory} from "react-router-dom";
import guy from "../../../assets/desktop/backgrounds/pexels-profile.png";
import {UserContext} from "../../../context/UserContext";

function CreateItemForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory();

    const {users, userLogIn} = useContext(UserContext)

    const val = users.find(user => {
        return user.username === userLogIn
    })

    const id = {}
    id.id = val.id


    async function onSubmit(data) {
        console.log(data)
        console.log(val)

        toggleLoading(true)
        try {
            await axios.post("http://localhost:8080/item", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify,
                name: data.name,
                price: data.price,
                itemType: data.itemType,
                description: data.description,
                count: data.count,
                customer: id

            }).then(() => {
                console.log("New item added")
            })
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("/profile");
            }, 2000)
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.signUpBackGround} src={guy} alt={guy}/>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.formBase}>

                    <fieldset className={styles.formSet}>
                        <h2 className={styles.formHeader}>CREATE ITEM / SERVICE</h2>

                        <label>
                            <select {...register("itemType",{ validate: (value) => value !== ""})} className={styles.select}>
                                <option value="">Please choose between an item or service....</option>
                                <option value="PRODUCT">Product</option>
                                <option value="SERVICE">Service</option>
                            </select>
                            {errors.itemType && <span className={styles.errors}>Please choose between an item or service..</span>}
                        </label>
                        

                        <FormInputComponent
                            type="text"
                            name="name"
                            className={styles.logInField}
                            placeHolder="Name"
                            fieldRef={register('name', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the first name',
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'At most 30 characters can be used to define the first name',
                                },
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="number"
                            name="price"
                            step="0.01"
                            className={styles.logInField}
                            placeHolder="Price"
                            fieldRef={register('price', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                min: {
                                    value: 0.1,
                                    message: "The price for an item or service must be greater or equal to 0.1",
                                },
                                max: {
                                    value: 10000,
                                    message: 'The max amount for an item or service is 10000',
                                }
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="text"
                            name="description"
                            className={styles.logInField}
                            placeHolder="Description"
                            fieldRef={register('description', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'At least 2 characters must be used to define the description',
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'At most 100 characters can be used to define the first name',
                                },
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="number"
                            name="count"
                            className={styles.logInField}
                            placeHolder="Count"
                            fieldRef={register('count', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                min: {
                                    value: 0.1,
                                    message: "The price for an item or service must be greater or equal to 0.1",
                                },
                                max: {
                                    value: 1000,
                                    message: 'The max amount for an item or service is 1000',
                                }
                            })}
                            errors={errors}
                        />
                        {loading === true &&
                        <span>Loading...</span>}

                        {registerSucces === true &&
                        <span>New item creation succeeded</span>}

                        <button
                            className={styles.confirmButton}
                            type="submit"
                            id="confirmButton"
                            name="submitButton"
                            disabled={pristine}> CREATE ITEM / SERVICE
                        </button>

                    </fieldset>

                </form>
            </div>
        </>
    )
}

export default CreateItemForm