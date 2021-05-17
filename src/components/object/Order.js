import React, {
    // Fragment,
    useContext
    , useEffect
    // ,
    // useEffect,
    // useState
} from 'react';
// import axios from "axios";
import {UserContext} from "../../context/UserContext";




function Order() {

    const {
        cart,
        removeFromCart,
        cartTotal,
    } = useContext(UserContext)

    useEffect(()=>{
        fetch("http://localhost:8080/customer")
            .then(res => {
                return res.json();
            }).then(data =>{
            // console.log(data)
            // console.log(data[0].items[1].name)
        })
    },[])


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
                        <h4>{item.name}</h4>
                        <p>description: {item.description}</p>
                        <p>price: €{item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                    </div>))
            }
            <h4>currently in your cart:({cart.length} items)</h4>
            <h2>TOTAL AMOUNT: €{cartTotal}</h2>
    </>

    )
}


export default Order;