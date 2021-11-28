import React, {
    Fragment,
    // Fragment,
    useContext
    , useEffect, useState
} from 'react';
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import styles from "./ShoppingCartComponent.module.css"

import {useHistory} from "react-router-dom";
import guy from "../../assets/desktop/backgrounds/shopping  2.png";


function ShoppingCartItem() {

    const [registerSucces, toggleRegisterSucces] = useState(false);
    const [productAmount, setProductAmount] = useState(1);
    const [itemId, setItemId] = useState("");




    const {
        cart,
        setCart,
        removeFromCart,
        cartTotal,
        users,
        userLogIn
    } = useContext(UserContext)

    const history = useHistory();


    const val = users.find(user => {
        return user.username === userLogIn
    })

    const id = {}
    id.id = val.id

    const lastArrayItem = val.invoices.length-1
    const invoice = val.invoices


    const lastInvoice=  invoice[lastArrayItem].id
    console.log(lastInvoice)


    async function onSubmit() {
        toggleRegisterSucces(false)
        try {
            await axios.post("http://localhost:8080/invoice", {
                description: 'Standard order',
                customer: id,
                totalPrice: cartTotal,
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
            toggleRegisterSucces(true)
            setCart([])

            setTimeout(() => {
                history.push("/profile");
            }, 2000)

        } catch (e) {
            console.error(e)
        }
    }
    // console.log(lastArrayItem)


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

    async function addItemToInvoice() {
        toggleRegisterSucces(false)
        console.log(itemId)
        try {
            await axios.post("http://localhost:8080/iteminvoice", {
                quantity: productAmount,
                invoice:
                    {"id":
                        (lastInvoice-1)
                },
                item: {"id": itemId}
                // item: {"id": 24}

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

            console.log("Item added")


            toggleRegisterSucces(true)
            // eslint-disable-next-line no-unused-expressions
            // setCart([])

            setTimeout(() => {
                // history.push("/profile");
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
    }, [users])

    useEffect(() => {
        fetch("http://localhost:8080/invoice")
            .then(res => {
                return res.json();
            }).then(data => {
            // console.log(data)
            // console.log(data[0].items[1].name)
        })
    }, [invoice])




    return (
        <>
            <div className={styles.container}>
                <img className={styles.background} src={guy} alt={guy}/>
                <div className={styles.outline}>
                    <h2 className={styles.formHeader}>SHOPPING CART</h2>

                    {cart.length === 0 && <>YOUR CART IS EMPTY</>}
                    {cart &&

                    cart.map((item, index) => (

                        <div key={index} className={styles.itemCard}>


                            <h4>{item.name}</h4>
                            <h4>{item.id}</h4>
                            <input type="number" placeholder="Number"
                                   onChange={event => {
                                       setProductAmount(event.target.value)
                                   }}/>

                                <p>description: {item.description}</p>
                            <p>price: €{item.price}</p>
                            {
                                <button onClick={() => {
                                    setItemId(item.id);
                                    addItemToInvoice();
                                    removeFromCart(item)
                                }}>Add to invoice</button>
                            }
                            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                        </div>))
                    }
                    {cart.length > 0 && <>
                        <h4>currently in your cart:({cart.length} items)</h4>
                        <h4>Message to Seller</h4>
                        <textarea placeholder= "Send a message"
                        />

                        <h2>TOTAL AMOUNT: €{cartTotal}</h2>
                        <button type="submit" className={styles.confirmButton} onClick={onSubmit}>CHECK OUT</button>

                    </>
                    }
                    {registerSucces === true &&
                    <span>ORDER FINISHED!</span>}
                </div>

            </div>
        </>
    )
}

export default ShoppingCartItem;