import React, {
    // Fragment,
    useContext
    , useEffect
} from 'react';
import axios from "axios";
import {UserContext} from "../../context/UserContext";

import {useHistory} from "react-router-dom";



function ShoppingCartItem() {


    const {
        cart,
        setCart,
        removeFromCart,
        cartTotal,
        registerSucces,
        toggleRegisterSucces
    } = useContext(UserContext)

    const history = useHistory();

    async function onSubmit() {



        try {
            await axios.post("http://localhost:8080/invoice",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify,

                invoiceItems:cart

            }).then(() => {
                console.log("Checkout succeeded")
            })
            toggleRegisterSucces(true)
            setCart(null)
            setTimeout(() => {
                history.push("http://localhost:3000/order");
            }, 2000)

        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
        fetch("http://localhost:8080/customer")
            .then(res => {
                return res.json();
            }).then(data => {
            // console.log(data)
            // console.log(data[0].items[1].name)
        })
    }, [])

    console.log(cart)


    return (
        <>
            <h2 className="formHeader">SHOPPING CART</h2>
            {cart.length === 0 && <>YOUR CART IS EMPTY</>}
            {cart && cart.map((item, index) => (
                <div key={index} className="item">
                    <h4>{item.name}</h4>
                    <p>description: {item.description}</p>
                    <p>price: €{item.price}</p>
                    <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                </div>))
            }
            {cart.length > 0 && <>
                <h4>currently in your cart:({cart.length} items)</h4>
                <h2>TOTAL AMOUNT: €{cartTotal}</h2>


                <button  type="submit" onClick={onSubmit}>CHECK OUT</button>


                {registerSucces === true &&
                <span>New item creation succeeded</span>}


            </>
            }
        </>
    )
}
export default ShoppingCartItem;