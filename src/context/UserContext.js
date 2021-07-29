import React, {createContext, useState, useEffect} from 'react'
import axios from "axios";
// import axios from "axios";


export const UserContext = createContext({});


function UserContextProvider({children}) {

    const [signedIn, toggleSignedIn] = useState(false);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [items, setItems] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [favoriteTotal, setFavoriteTotal] = useState(0);
    const [userLogIn, setUserLogIn] = useState("");
    const [userDetail, setUserDetail] = useState({
        username: "",
        firstName: "",
        lastName:"",
        id:"",
    });

    const itemLocation = "http://localhost:8080/item"
    const userLocation = "http://localhost:8080/customer"


    useEffect(() => {

        async function getAllItems() {
            toggleLoading(true)
            setError(false)

            try {
                const {data} = await axios.get(itemLocation);
                setItems(data);

            } catch (e) {
                setError(e.message);
            }
            toggleLoading(false);
        }

        getAllItems()
    }, [itemLocation]);


    useEffect(() => {

        async function getAllUsers() {
            toggleLoading(true)
            setError(false)
            try {
                const {data} = await axios.get(userLocation);
                setUsers(data);

            } catch (e) {
                setError(e.message);
            }
            toggleLoading(false);
        }
        getAllUsers()
    }, [userLocation]);


    //
    //     fetch("http://localhost:8080/item")
    //         .then(res => {
    //             return res.json();
    //         }).then(data =>{
    //         setItems(data)
    //     }
    //
    // },[])


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!


    // DO SOMETHING WITH HISTORY.PUSH?????
    // REDIRECT COMPONENT NOT WORKING YET!!

    useEffect(() => {
        favoriteInvoiceSum();
        // eslint-disable-next-line
    }, [favorite]);

    const favoriteInvoiceSum = () => {
        let totalSum = 0;
        for (let i = 0; i < favorite.length; i++) {
            totalSum += favorite[i].price
        }
        setFavoriteTotal(totalSum)
    }

    const addToFavorite = (item) => {

        setFavorite([...favorite, item])
        for (let i = 0; i < favorite.length; i++) {
        }
        console.log(favorite, favorite.length)
    }

    const removeFromFavorite = (item) => {
        let copyOfFavorite = [...favorite]
        copyOfFavorite = copyOfFavorite.filter(favoriteItem => favoriteItem.id !== item.id)
        setFavorite(copyOfFavorite)
        // console.log(favorite, favorite.length)
    }

    const favoriteItems = favorite.map((item, index) => (
        <div key={index} className="item">
            <h4>{item.name}</h4>
            <p>description: {item.description}</p>
            <p>price: €{item.price}</p>
            <button onClick={() => removeFromFavorite(item)}>Remove from favorites</button>
        </div>
    ))


    useEffect(() => {
        cartInvoiceSum();
        // eslint-disable-next-line
    }, [cart]);

    const minusCount = () => {
        count > 0 ? setCount(count - 1) : setCount(0)
    }
    const plusCount = () => {
        setCount(count + 1)
    }

    const cartInvoiceSum = () => {
        let totalSum = 0;
        for (let i = 0; i < cart.length; i++) {
            totalSum += cart[i].price
        }
        setCartTotal(totalSum)
    }

    // const addToCart = (item) => {
    //     cart.find((cartItem, index) => {
    //         if (cartItem.id === item.id) {
    //             console.log('HIJ IS ER AL')
    //             // als dit item hier al bestaat, kopieer dan de bestaande state array
    //             const newCart = [...cart];
    //             // op het indexnummer van het gevonden item, kijk daar naar wat voor getal er in de amount property staat en hoog dat op met 1
    //             newCart[index].amount = newCart[index].amount + 1;
    //             // zet die nieuwe array in de state ter vervanging van wat er stond
    //             setCart(newCart);
    //             return true;
    //         }
    //         // stond hij er niet al in? Voeg 'm dan gewoon toe
    //         console.log('HIJ IS ER NIET')
    //         setCart([...cart, item]);
    //         return false;
    //     });
    // };

    const addToCart = (item) => {
        // DIT ALLEEN OMDAT WE GEEN AMOUNT HEBBEN
        const itemForCart = {
            ...item,
            amount: 0,
        }

        let indexOfDoubleItem;

        // eslint-disable-next-line array-callback-return
        const outcome = cart.find((cartItem, index) => {
            if (cartItem.id === item.id) {
                indexOfDoubleItem = index;
                return true;
            }
        })

        if (outcome) {
            const newCart = [...cart];
            newCart[indexOfDoubleItem].amount = newCart[indexOfDoubleItem].amount + 1;
            setCart(newCart);
            console.log('NIEUWE CART', newCart)
        } else {
            // ALLEEN ITEMFORCART OMDAT WE GEEN AMAOUNT HEBBEN
            setCart([...cart, itemForCart])
        }
    }

    const removeFromCart = (item) => {
        let copyOfCart = [...cart]
        copyOfCart = copyOfCart.filter(cartItem => cartItem.id !== item.id)
        setCart(copyOfCart)
        // console.log(cart, cart.length)
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

    useEffect(() => {
    }, [signedIn]);

    const data = {
        // items data
        // fetchItems: fetchItems,
        items: items,
        setItems: setItems,
        users: users,
        setUsers: setUsers,

        favorite: favorite,
        setFavorite: setFavorite,
        addToFavorite: addToFavorite,
        removeFromFavorite: removeFromFavorite,
        setFavoriteTotal: setFavoriteTotal,
        favoriteTotal: favoriteTotal,
        favoriteItems: favoriteItems,

        // login data
        currentLogIn: signedIn,
        signedIn: signedIn,
        changeState: changeState,
        toggleSignedIn: toggleSignedIn,
        userDetail: userDetail,
        setUserDetail: setUserDetail,
        userLogIn: userLogIn,
        setUserLogIn: setUserLogIn,
        // functionality
        loading: loading,
        error: error,

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