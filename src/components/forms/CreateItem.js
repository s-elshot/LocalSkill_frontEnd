import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './CreateItem.css';
import axios from "axios";
import {useHistory} from "react-router-dom"
import FormInputComponent from "./FormInputComponent";


// import lampMan from "../../assets/backgrounds/Image.png";


function CreateItem() {

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
                    item: data.item,
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    count: data.count,
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
            <div className="formPositioning">
                <form onSubmit={handleSubmit(onSubmit)} className="logInForm">

                    <fieldset className="formField">
                        <h2 className="formHeader">CREATE ITEM</h2>

                        <label htmlFor="product" id="radioSelector">
                            <input type="radio" name="type" id="product"  {...register("type")} value= "PRODUCT" /> product
                            <input type="radio" name="type" id="service"  {...register("type")} value= "SERVICE" />service
                        </label>
                        {/*<label htmlFor="service" id="radioSelector">*/}
                        {/*    <input type="radio" name="item" id="service"  {...register("service")} value= "SERVICE" />service*/}
                        {/*</label>*/}


                        <FormInputComponent
                            type="text"
                            name="name"
                            className="logInField"
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
                            className="logInField"
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
                            className="logInField"
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
                            className="logInField"
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


                        {registerSucces === true &&
                        <span>Sign up succeeded</span>}

                        {loading === true &&
                        <span>Loading...</span>}


                        <button
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

export default CreateItem