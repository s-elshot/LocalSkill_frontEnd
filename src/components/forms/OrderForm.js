import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './OrderForm.css';
import axios from "axios";
import {useHistory} from "react-router-dom"
import FormInputComponent from "./FormInputComponent";


function OrderForm() {

    const [loading, toggleLoading] = useState(false)
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    // const [count, setCount] = useState(0)
    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory();


    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true)
        try {
            const result = await axios.post("http://localhost:8080/customer",
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    age: data.age,
                    email: data.email,
                    areaCode: data.areaCode,
                    city: data.city,
                    guild: data.guild,
                    password: data.password
                })
            console.log(result)
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("http://localhost:3000/order");
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
                    <h2 className="formHeader">SHOPPING CART</h2>

                    {/*<p>{count}</p>*/}
                    {/*<button type="button" onClick={()=> count > 0 ? setCount(count -1 ): setCount(0)}>-</button>*/}
                    {/*<button type="button" onClick={()=> setCount(count+1)}>+*/}

                    {/*</button>*/}
                    {/*<button type="button" onClick={()=> setCount(0)}>RESET</button>*/}


                    <textarea>Write your Message</textarea>
                    <FormInputComponent
                        type="textArea"
                        name="message"
                        className="signUpField"
                        placeHolder="Write a message to the seller"
                        fieldRef={register('firstName', {
                            minLength: {
                                value: 10,
                                message: 'At least 10 characters must be used',
                            },
                            maxLength: {
                                value: 200,
                                message: 'At most 200 characters can be used to define the message',
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
                        disabled={pristine}> BUY PRODUCTS
                    </button>
                </fieldset>
            </form>
        </>
    )
}

export default OrderForm;