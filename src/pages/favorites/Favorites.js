import React, {useContext, useEffect} from "react";

import styles from "./Favorites.module.css";
import guy from "../../assets/desktop/backgrounds/shoppingcart.png";
import {UserContext} from "../../context/UserContext";


function Favorites (){
    const {
        favorite,
        addToCart,
        favoriteTotal,
        removeFromFavorite,
    } = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:8080/customer")
            .then(res => {
                return res.json();
            }).then(data => {
        })
    }, [])

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
                            {/* eslint-disable-next-line no-sequences */}
                            <button onClick={()=> (addToCart(item),removeFromFavorite(item)) }>Add to Shopping Cart</button>
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