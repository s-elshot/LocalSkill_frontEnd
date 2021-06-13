import React, {
    Fragment,
    // Fragment,
    useContext
    , useEffect
} from 'react';
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import styles from "./ShoppingCartComponent.module.css"

import {useHistory} from "react-router-dom";
import guy from "../../assets/desktop/backgrounds/shopping  2.png";


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
            await axios.post("http://localhost:8080/invoice", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify,

                invoiceItems: cart

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
            <div className={styles.container}>
                <img className={styles.background} src={guy} alt={guy}/>
                <div className={styles.outline}>
                <h2 className={styles.formHeader}>SHOPPING CART</h2>
                {cart.length === 0 && <>YOUR CART IS EMPTY</>}
                {cart && cart.map((item, index) => (
                    <div key={index} className={styles.itemCard}>
                        <h4>{item.name}</h4>
                        <p>description: {item.description}</p>
                        <p>price: €{item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                    </div>))
                }
                {cart.length > 0 && <>
                    <h4>currently in your cart:({cart.length} items)</h4>
                    <h2>TOTAL AMOUNT: €{cartTotal}</h2>


                    <button type="submit" className={styles.confirmButton} onClick={onSubmit}>CHECK OUT</button>


                    {registerSucces === true &&
                    <span>New item creation succeeded</span>}

                </>
                }
                </div>
            </div>
        </>
    )
}

export default ShoppingCartItem;