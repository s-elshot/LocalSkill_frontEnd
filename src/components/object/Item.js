import React, {
    Fragment, useContext
    // , useEffect
    , useState
} from 'react';
import {UserContext} from "../../context/UserContext";
import {ReactComponent as LoadingIcon} from "../../assets/mobileIcons/Spin-1s-200px.svg"
import SingleItemComponent from "./SingleItemComponent";


function Item() {

    const {
        items,
        cart,
        addToCart,
        removeFromCart,
        cartTotal,
        error,
        loading,
        addToFavorite,
    } = useContext(UserContext)
    const [searchProductName, setSearchProductName] = useState("");
    const [searchPrice, setSearchPrice] = useState(0);


    return (
        <Fragment>
            {loading &&
            <>
                <LoadingIcon className="loader"/>
                <p>Loading....</p>
            </>
            }
            {error && <div>ERROR: {error}</div>}

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
                return <SingleItemComponent
                    key={index}
                    index={index}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    addToFavorite={addToFavorite}
                />

            })}
        </Fragment>
    )
}

export default Item;