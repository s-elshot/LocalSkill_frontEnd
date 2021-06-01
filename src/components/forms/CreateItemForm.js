import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import styles from './CreateItemForm.module.css';
import axios from "axios";

import FormInputComponent from "./FormInputComponent";
import {useHistory} from "react-router-dom";


// import lampMan from "../../assets/backgrounds/Image.png";


function CreateItemForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory();



    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            await axios.post("http://localhost:8080/item",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify,
                                itemType: data.itemType,
                                // item: data.item,
                                // content: data.content,
                                name: data.name,
                                price: data.price,
                                description: data.description,
                                count: data.count,
            }).then(() => {
                console.log("New item added")
            })
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("http://localhost:3000/");
            }, 2000)

        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }


    return (
        <>
            <div className="formPositioning">
                <form onSubmit={handleSubmit(onSubmit)} className="logInForm">

                    <fieldset className={styles.formField}>
                        <h2 className={styles.formHeader}>CREATE ITEM</h2>

                        <label htmlFor="product" id="radioSelector">
                            <input className={styles.createInput} type="radio" name="itemType" id="product"  {...register("itemType")}
                                   value="PRODUCT"/> product
                            <input className={styles.createInput} type="radio" name="itemType" id="service"  {...register("itemType")} value="SERVICE"/>service
                        </label>


                        <label className={styles.logInField}>
                            <input className={styles.createInput} id="content" name="content" type="file" {...register("content")}/>
                        </label>


                        <FormInputComponent
                            type="text"
                            name="name"
                            className={styles.logInField}
                            placeHolder="Item name"
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
                            placeHolder="Item price"
                            fieldRef={register('price', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                min: {
                                    value: 0,
                                    message: "The price for an item can't be a negative number",
                                },
                                max: {
                                    value: 10000,
                                    message: 'The max amount for an item is 10000',
                                }
                            })}
                            errors={errors}
                        />

                        <FormInputComponent
                            type="text"
                            name="description"
                            className={styles.logInField}
                            placeHolder="Item description"
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
                            placeHolder="Item count"
                            fieldRef={register('count', {
                                required: {
                                    value: true,
                                    message: 'This field must have input',
                                },
                                min: {
                                    value: 0,
                                    message: "The price for an item can't be a negative number",
                                },
                                max: {
                                    value: 1000,
                                    message: 'The max amount for an item is 1000',
                                }
                            })}
                            errors={errors}
                        />
                        {loading === true &&
                        <span>Loading...</span>}


                        {registerSucces === true &&
                        <span>New item creation succeeded</span>}




                        <button
                            className={styles.logInField}
                            type="submit"
                            id="confirmButton"
                            name="submitButton"
                            disabled={pristine}> CREATE ITEM
                        </button>

                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default CreateItemForm