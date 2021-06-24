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

    // @todo: usergegevens toevoegen aan de userContext
    const {
        cart,
        setCart,
        removeFromCart,
        cartTotal,
        registerSucces,
        // toggleRegisterSucces,
        userDetail
    } = useContext(UserContext)

    const history = useHistory();

    // async function oud() {
    //     axios.post().then().then().catch();
    // }
    //
    // async function nieuw() {
    //     try {
    //         const response = await axios.post();
    //         const tweede = await nogiets;
    //     } catch(e) {
    //         // doe iets met die error
    //     }
    // }


    // function getCartIds(cart) {
    //     let cartIds = []
    //     for (let i = 0; i < cart.length; i++) {
    //         cartIds.push("id:",cart[i].id)
    //     }
    //     return cartIds
    // }

    //     return cart.map((cardItem) => {
    //         return cardItem.id;
    //     })
    // }

    console.log(userDetail.id)

    async function onSubmit() {
        // registerSucces(false)
        try {
            await axios.post("http://localhost:8080/invoice", {
                description: 'het lukt?',
                customer: {
                    id: userDetail.id
                    // id: 2
                }
                // ,
                //     invoiceItems:
                //      [{id:4 },{id:3}]
            // }
                    //     () => {
                    //     let cartIds = []
                    //     for (let i = 0; i < cart.length; i++) {
                    //         cartIds.push(cart[i].id)
                    //     }
                    //     return cartIds
                    // }

                // }
                // invoiceItems: () => {
                //     let cartIds = []
                //     for (let i = 0; i < cart.length; i++) {
                //         cartIds.push(cart[i].id)
                //     }
                //     return cartIds
                // },

            })

            console.log("Checkout succeeded")
            // toggleRegisterSucces(true)
            setCart([])

            setTimeout(() => {
                history.push("/profile");
            }, 2000)

        } catch (e) {
            console.error(e)
        }
    }

    // async function onSubmit() {
    //
    //
    //     try {
    //         await axios.post("http://localhost:8080/invoice", {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify,
    //
    //             invoiceItems: cart
    //
    //         }).then(() => {
    //             console.log("Checkout succeeded")
    //         })
    //         toggleRegisterSucces(true)
    //         setCart(null)
    //         setTimeout(() => {
    //             history.push("http://localhost:3000/order");
    //         }, 2000)
    //
    //     } catch (e) {
    //         console.error(e)
    //     }
    //
    // }

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

                        <textarea>MESSAGE TO SELLER..</textarea>
                        <button type="submit" className={styles.confirmButton} onClick={onSubmit}>CHECK OUT</button>


                        {registerSucces === true &&
                        <span>ORDER FINISHED!</span>}

                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default ShoppingCartItem;