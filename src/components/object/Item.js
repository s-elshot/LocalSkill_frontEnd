import React, {Fragment, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {UserContext} from "../../context/UserContext";



// import Button from "../logIn/Button";


function Item() {

    const {count,cart,addToCart,removeFromCart,cartItems, cartTotal} = useContext(UserContext)

    const [items, setItems] = useState(null);
    const [searchProductName, setSearchProductName] = useState("");
    const [searchPrice, setSearchPrice] = useState(0);


    const fetchItems = () => {
        axios.get("http://localhost:8080/item").then(res => {
            setItems(res.data)
        });
    };


    useEffect(() => {
        fetchItems();
    }, []);

    // const cartItems = cart.map((item,index) => (
    //     <div key={index} className="item">
    //         {/*<h3>{item.content}</h3>*/}
    //
    //         <h4>{item.name}</h4>
    //         <p>description: {item.description}</p>
    //         <p>price: €{item.price}</p>
    //         <button onClick={()=>removeFromCart(item)}>Remove from Cart</button>
    //     </div>
    // ))


    return (
        <Fragment>
            <h2 className="formHeader">SHOPPING CART</h2>
            <div>currently in you cart:({cart.length} items)</div>
                <div>{cartItems}</div>
                <div>TOTAL AMOUNT: €{cartTotal}</div>


            <h2 className="formHeader">SEARCH</h2>

            <input type="text" placeholder="Search products / services"
                   onChange={event => {
                       setSearchProductName(event.target.value)
                   }}/>

            <input type="text" placeholder="Insert your price"
                   onChange={e => {
                       setSearchPrice(e.target.value)
                   }}
            />


            {/* eslint-disable-next-line array-callback-return */}
            {items && items.filter((val) => {
                if (searchProductName === "" && searchPrice === 0) {
                    return val;
                } else if (val.name.toLowerCase().includes(searchProductName.toLowerCase()) && searchPrice === 0) {
                    return val;
                } else if (searchProductName === "" && searchPrice < val.price) {
                    return val;
                } else if (val.name.toLowerCase().includes(searchProductName.toLowerCase()) && searchPrice < val.price) {
                    return val;

                }
            }).map((item, index) => {
                return <div key={index} className="item">
                    {/*<h3>{item.content}</h3>*/}

                    <h4>{item.name}</h4>
                    <p>description: {item.description}</p>
                    <p>price: €{item.price}</p>

                    <button onClick={()=>addToCart(item)}>+</button>{count}
                    <button onClick={()=>removeFromCart(item)}>-</button>
                </div>
            })}

            {/*{cart && cart.map((item, index) => {*/}
            {/*    return <div key={index} className="item">*/}
            {/*        /!*<h3>{item.content}</h3>*!/*/}

            {/*        <h4>{item.name}</h4>*/}
            {/*        <p>description: {item.description}</p>*/}
            {/*        <p>price: €{item.price}</p>*/}

            {/*        <button onClick={()=>removeFromCart(item)}>Remove from Cart</button>*/}
            {/*    </div>*/}
            {/*})}*/}
        </Fragment>
    )
}


export default Item;