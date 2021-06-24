import React, {useContext, useState} from 'react';

import styles from "./Overview.module.css"
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png"

import OverviewComponent from "../../components/object/overviewComponent";
// import ItemOverview from "./ItemOverview";

import OverviewDynamic from "./OverviewDynamic";
import SingleItemComponent from "../../components/object/SingleItemComponent";
import {UserContext} from "../../context/UserContext";



function Overview() {

    // check dynamic params
    // niet undefined? Dan zoekopdracht triggeren waarin deze filters gebruikt worden
    // maak get request voor producten naar backend
    // wel undefined? Dan "begin met zoeken laten zien

    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite

    } = useContext(UserContext)

    const [productType, setProductType] = useState("");
    const [productName, setProductName] = useState("");
    const [
        // areaCode,
        setAreaCode] = useState("");
    const [guild, setGuild] = useState("")

    function ButtonClick(){
        console.log("werkt")
    }

    // const openGuilderItems = users.filter((users) => {
    //     if (users.areaCode === areaCode) {
    //         const products = users.items.filter((item) => {
    //             return item.itemType === itemType;
    //         });
    //         return products ? true : false
    //     };
    // })

    return (
        <div className={styles.container}>
            <h1 className={styles.enterText}>LOCAL SKILL</h1>

            <h2 className={styles.formHeader}>SEARCH</h2>

            <fieldset className={styles.searchElement}>

                <input className={styles.input}  type="text" placeholder="Set your Guild"
                       onChange={event => {
                           setGuild(event.target.value)
                       }}/>

                <input  className={styles.input} type="text" placeholder="Search products / services"
                       onChange={event => {
                           setProductType(event.target.value)
                       }}/>


                <input className={styles.input} type="text" placeholder="Search product name"
                       onChange={event => {
                           setProductName(event.target.value)
                       }}/>

                <input className={styles.input}  type="text" placeholder="Set your areaCode"
                       onChange={event => {
                           setAreaCode(event.target.value)
                       }}/>

                <button className={styles.button} type="submit"  onClick={ButtonClick}><img className={styles.img} src={find} alt={find}/></button>
            </fieldset>


            begin met zoeken!

            <OverviewDynamic/>
            {/* eslint-disable-next-line array-callback-return */}
            {/*{users && users.map((item, index) =>{*/}
            {/*return <SingleItemComponent*/}
            {/*key={index}*/}
            {/*    index={index}*/}
            {/*    item={item}*/}
            {/*addToCart={addToCart}*/}
            {/*removeFromCart={removeFromCart}*/}

            {/*/>*/}
            {/*})}*/}

            {/*{users && guilderItems.map((item, index) => {*/}
            {/*    return item.items.map((item,index) => {*/}
            {/*        return <SingleItemComponent*/}
            {/*            key={index}*/}
            {/*            index={index}*/}
            {/*            item={item}*/}
            {/*            addToCart={addToCart}*/}
            {/*            removeFromCart={removeFromCart}*/}
            {/*            addToFavorite={addToFavorite}*/}
            {/*        />*/}
            {/*    })*/}
            {/*})}*/}

            {users && users.filter((val) => {

                if (productType.toUpperCase() === "" && productName  === "") {
                    return val;
                } else if (val.name.toLowerCase().includes(productName.toLowerCase()) && productName === "") {
                    return val;
                // } else if (searchProductName === "" && searchPrice < val.price) {
                //     return val;
                // } else if (val.name.toLowerCase().includes(searchProductName.toLowerCase()) && searchPrice < val.price) {
                //     return val;
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

            <OverviewComponent
                title="Explore your community"
                bodyText="incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Neque laoreet suspendisse interdum consectetur libero id. "
                link="/signUp"
                linkText="Sign up as a customer today"
            />

            <OverviewComponent
                title="Contribute to the community?"
                bodyText="incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Neque laoreet suspendisse interdum consectetur libero id. "
                link="/signUp"
                linkText="Sign up as a guilder today"
            />

            {/*<ItemOverview/>*/}

        </div>
    );
}

export default Overview;