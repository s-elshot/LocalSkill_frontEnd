import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import styles from "./ItemPost.module.css"
import guy from "../../assets/desktop/backgrounds/pexels-photo-statueFace.png";



import {UserContext} from "../../context/UserContext";


function ItemPost() {
    // destructures the id from app.js(navigation - line 91)

    const {
        items,
        addToCart,
    } = useContext(UserContext)


    const {id} = useParams();
    console.log(id,typeof id)
    const currentItem = items.find((post) => {
        return post.id === parseInt(id);
    });


    return (
        <>
            <div className={styles.container}>
            <img className={styles.background} src={guy} alt={guy}/>
                <div className={styles.card}>
                <article>
                <h1>{currentItem.name}</h1>
                <p>description: {currentItem.description}</p>
                <p>price: €{currentItem.price}</p>
                <p>item type: {currentItem.itemType}</p>

                </article>
                    <p>
                        <button onClick={() => addToCart(currentItem)}>add to cart</button>
                    </p>
            <article className={styles.navContainer}>
                <Link to="/">Terug naar Home ?</Link>
            </article>
               </div>
            </div>
        </>
    )
        ;
}

export default ItemPost;