import React, {createContext, useState, useEffect} from 'react'
import axios from "axios";


export const UserContext = createContext({});


function UserContextProvider({children}) {

    const [signedIn, toggleSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [items, setItems] = useState(null);

    const fetchItems = () => {
        axios.get("http://localhost:8080/item").then(res => {
            setItems(res.data)
        });
    };


    useEffect(() => {
        fetchItems();
    }, []);

    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!


    useEffect(() =>{
        cartInvoiceSum();
        // eslint-disable-next-line
        }, [cart]);

    const minusCount = () => {
        count > 0 ? setCount(count -1 ): setCount(0)
    }
    const plusCount = () => {
        setCount( count + 1)
    }

    const cartInvoiceSum = () => {
        let totalSum = 0;
        for (let i = 0; i < cart.length; i++) {
            totalSum += cart[i].price
        }
        setCartTotal(totalSum)
    }

    const addToCart = (item) => {
        setCart([...cart, item])
        for (let i = 0; i < cart.length; i++) {
        }
        console.log(cart, cart.length)
    }

    const removeFromCart = (item) => {
        let copyOfCart = [...cart]
        copyOfCart = copyOfCart.filter(cartItem => cartItem.id !== item.id)
        setCart(copyOfCart)
        console.log(cart, cart.length)
    }

    const cartItems = cart.map((item, index) => (
        <div key={index} className="item">
            <h4>{item.name}</h4>
            <p>description: {item.description}</p>
            <p>price: €{item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
        </div>
    ))

    function changeState() {
        toggleSignedIn(!signedIn)
    }

    const data = {
        // items data
        fetchItems: fetchItems,
        items: items,
        setItems: setItems,

        // login data
        currentLogIn: signedIn,
        signedIn: signedIn,
        changeState: changeState,
        toggleSignedIn: toggleSignedIn,

        // count data
        count: count,
        setCount: setCount,
        plusCount: plusCount,
        minusCount: minusCount,

        // cart data
        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cartTotal: cartTotal,
        setCartTotal: setCartTotal,
        cartInvoiceSum: cartInvoiceSum,
        cartItems: cartItems,


    }


    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContextProvider;