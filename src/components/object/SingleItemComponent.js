import React, {
    Fragment
} from 'react';

import template from "../../assets/mobileIcons/pexels-photo-3026809@2x.png"
import {NavLink} from "react-router-dom";
import './SingleItemComponent.css'



function SingleItemComponent({src,index,item,addToCart,removeFromCart}) {

    return (
        <Fragment>
            <article key={index} className="itemCard">
                <img src={template} alt="template"/>
                <div className="cardInfo">
                <NavLink exact to={`/Item/${item.id}`}>
                    <h2> {item.name}</h2>
                </NavLink>
                <p>description: {item.description}</p>
                <h4>price: €{item.price}</h4>
                {/*<p>Kind of product:{item.itemType}</p>*/}

                <button onClick={() => addToCart(item)}>add to cart</button>
                <button onClick={() => removeFromCart(item)}>remove from cart</button>
                </div>
            </article>
        </Fragment>
    )
}


export default SingleItemComponent;