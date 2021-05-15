import React, {
    Fragment, useContext
    // , useEffect
    , useState
} from 'react';
// import axios from "axios";
import {UserContext} from "../../context/UserContext";
import {NavLink} from "react-router-dom";


function Item() {

    const {
        // count,
        items,
        cart,
        addToCart,
        removeFromCart,
        cartTotal,
        // fetchItems,
        // minusCount,
        // plusCount
    } = useContext(UserContext)
    // const [items, setItems] = useState(null);
    const [searchProductName, setSearchProductName] = useState("");
    const [searchPrice, setSearchPrice] = useState(0);

    //
    // const fetchItems = () => {
    //     axios.get("http://localhost:8080/item").then(res => {
    //         setItems(res.data)
    //     });
    // };
    //
    //
    // useEffect(() => {
    //     fetchItems();
    // }, []);


    return (
        <Fragment>


            {cart.length > 0 &&
            <>
                <h2 className="formHeader">SHOPPING CART</h2>
                <div>currently in your cart:({cart.length} items)</div>
                <div>TOTAL AMOUNT: €{cartTotal}</div>
            </>
            }

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
                    <NavLink exact to={`/Item/${item.id}`}>
                        {item.name}
                    </NavLink>
                    <p>description: {item.description}</p>
                    {/*{count}*/}
                    {/*<button onClick={plusCount}>+</button>*/}
                    {/*<button onClick={minusCount}>-</button>*/}
                    <p>price: €{item.price}</p>

                    <button onClick={() => addToCart(item)}>add to cart</button>

                    <button onClick={() => removeFromCart(item)}>remove from cart</button>

                </div>

            })}


        </Fragment>
    )
}


export default Item;