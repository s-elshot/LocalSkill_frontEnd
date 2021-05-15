import React, {
    // Fragment,
    useContext
    // ,
    // useEffect,
    // useState
} from 'react';
// import axios from "axios";
import {UserContext} from "../../context/UserContext";




function Order() {

    const {
        cart,
        cartItems,
        cartTotal,
    } = useContext(UserContext)
    // const [orders, setOrders] = useState(null);

    // const fetchOrders = () => {
    //     axios.get("http://localhost:8080/order").then(res => { setOrders(res.data)
    //     });
    // };

    // useEffect(() => {
    //     fetchOrders();
    // }, []);





    return (
        <>
            <h2 className="formHeader">SHOPPING CART</h2>
            {cart && cart.map((item, index) => (
            <div key={index} className="item">
                {cartItems}
            </div>))}
            <h4>currently in your cart:({cart.length} items)</h4>
            <h2>TOTAL AMOUNT: €{cartTotal}</h2>
    </>

    )
}


export default Order;