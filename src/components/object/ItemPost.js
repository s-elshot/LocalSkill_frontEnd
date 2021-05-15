import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import posts from "../data/item.json"

import {UserContext} from "../../context/UserContext";

function ItemPost() {
    // destructures the id from app.js(navigation - line 91)

    const {
        addToCart,
    } = useContext(UserContext)


    const { id } = useParams();
    const currentPost = posts.find((post) => {
        return post.id === id;

    });
    // console.log(items)
    // console.log(currentPost)

    return (
        <>
            <article>
                <h1>{currentPost.name}</h1>
                <p>description: {currentPost.description}</p>
                <p>price: €{currentPost.price}</p>


                <button onClick={() => addToCart(currentPost)}>add to cart</button>

            </article>
            <article>
                <Link to="/">Terug naar Home</Link>
            </article>
        </>
    );
}

export default ItemPost;