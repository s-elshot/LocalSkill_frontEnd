import React, {useContext} from 'react';
import {
    useParams
} from "react-router-dom";


import {UserContext} from "../../context/UserContext";
import SingleItemComponent from "../../components/object/SingleItemComponent";


function OverviewDynamic() {
    // destructures the id from app.js(navigation - line 91)

    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite

    } = useContext(UserContext)

    console.log(users)


    const {itemType, areaCode} = useParams();

    const guilderItems = users.filter((users) => {
        if (users.areaCode === areaCode) {

            const products = users.items.filter((item) => {
                return item.itemType === itemType;
            });
            return products
                ? true : false
        };
    })

    console.log(guilderItems)


    // const currentItem = items.find((item) => {
    //     if (item && item.itemType){
    //         return item.itemType === itemType ;
    //     } if (item && item.customer.areaCode){
    //         return item.customer.areaCode === areaCode
    //     }
    //
    // });
    return (
        <>

            {users && guilderItems.map((item, index) => {
            return item.items.map((item,index) => {
                return <SingleItemComponent
                key={index}
                index={index}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addToFavorite={addToFavorite}
                />
            })
            })}
        </>
    );
}

export default OverviewDynamic;