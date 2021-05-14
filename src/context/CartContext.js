// import React, {createContext, useState} from 'react'
//
//
// export const CartContext = createContext({});
//
//
// function CartContextProvider({children}) {
//
//
//     const [cart, setCart]= useState([]);
//
//     const addToCart = (item) =>{
//         setCart([...cart,item])
//
//         console.log("clicked")
//     }
//     // DO SOMETHING WITH HISTORY.PUSH?????
//     // REDIRECT COMPONENT NOT WORKING YET!!
//
//     // function signIn() {
//     //     if (!signedIn) {
//     //         return(
//     //        <Redirect to={"/"}/>)
//     //
//     //     }
//     // }
//
//     // DO SOMETHING WITH HISTORY.PUSH?????
//     // REDIRECT COMPONENT NOT WORKING YET!!
//
//
//
//     const data = {
//
//         addToCart:addToCart(),
//         cart:cart,
//         setCart:setCart,
//
//     }
//
//
//
//
//     return (
//         <CartContext.Provider value={data}>
//             {children}
//         </CartContext.Provider>
//     );
// }
//
//
// export default CartContextProvider;