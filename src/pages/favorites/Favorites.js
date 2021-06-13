import React, {useContext, useEffect} from "react";

import styles from "./Favorites.module.css";
import guy from "../../assets/desktop/backgrounds/pexels-photo-pottery.png";
import {UserContext} from "../../context/UserContext";


function Favorites (){
    const {
        // count,
        favorite,
        addToCart,
        favoriteTotal,
        removeFromFavorite,
    } = useContext(UserContext)


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
        })
    }, [])

    console.log(favorite)




    return (
        <>
            <div className={styles.container}>
                <img className={styles.background} src={guy} alt={guy}/>
                <div className={styles.outline}>
                    <h2 className={styles.formHeader}>FAVORITES</h2>
                    {favorite.length === 0 && <>NO FAVORITES SELECTED</>}
                    {favorite && favorite.map((item, index) => (
                        <div key={index} className={styles.itemCard}>
                            <h4>{item.name}</h4>
                            <p>description: {item.description}</p>
                            <p>price: €{item.price}</p>
                            <button onClick={() => removeFromFavorite(item)}>Remove from Favorites</button>
                            <button onClick={()=> addToCart(item)}>Add to Shopping Cart</button>
                        </div>))
                    }
                    {favorite.length > 0 && <>
                        <h4>your current favorites:({favorite.length} items)</h4>
                        <h2>TOTAL AMOUNT: €{favoriteTotal}</h2>
                    </>
                    }
                </div>
            </div>
        </>
    )
}
export default Favorites;