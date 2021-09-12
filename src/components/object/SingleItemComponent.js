import React, {
    Fragment
} from 'react';

import template from "../../assets/mobileIcons/pexels-photo-3026809@2x.png"
import favorite from "../../assets/mobileIcons/Icon material-favorite-black border.png"
import {NavLink} from "react-router-dom";
import './SingleItemComponent.css'


function SingleItemComponent({src, index, item, addToCart, removeFromCart
                                 ,addToFavorite
}) {



    return (
        <Fragment>
            <article key={index} className="itemCard">
                {item.itemType === "PRODUCT" ?
                    < img src={template} alt="template"/> : < img src={favorite} alt="template"/>
                }
                <div className="cardInfo">
                    <NavLink exact to={`/Item/${item.id}`}>
                        <h2> {item.name}</h2>
                    </NavLink>
                    <p>description: {item.description}</p>
                    <h4>price: €{item.price}</h4>
                    {/*<p>Kind of product:{item.itemType}</p>*/}
                    <div className="buttonLayOut">
                    <button className="buttonElement" onClick={() => addToCart(item)}>add to cart</button>
                    <button className="buttonElement" onClick={() => removeFromCart(item)}>remove from cart</button>
                    <button className="buttonElement" onClick={() => addToFavorite(item)}>
                    <img src={favorite} alt={favorite} className="buttonElement"/>
                    </button>
                    </div>
                </div>
                    {/*<button onClick={() => addToFavorite(item)}>favorite</button>*/}

            </article>
        </Fragment>
    )
}


export default SingleItemComponent;