import React, {createContext, useState, useEffect} from 'react'


export const UserContext = createContext({});


function UserContextProvider({children}) {

    const [signedIn, toggleSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!

    useEffect(() =>{
        cartInvoiceSum();
        // eslint-disable-next-line
        }, [cart]);


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
        currentLogIn: signedIn,
        signedIn: signedIn,
        count: count,
        cart: cart,
        setCart: setCart,
        setCount: setCount,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        cartTotal: cartTotal,
        setCartTotal: setCartTotal,
        cartInvoiceSum: cartInvoiceSum,
        cartItems: cartItems,
        changeState: changeState,
        toggleSignedIn: toggleSignedIn,
    }


    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContextProvider;