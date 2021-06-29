import React, {useContext, useState} from 'react';

import styles from "./Overview.module.css"
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png"

// import OverviewComponent from "../../components/object/overviewComponent";
// import ItemOverview from "./ItemOverview";


import SingleItemComponent from "../../components/object/SingleItemComponent";
import {UserContext} from "../../context/UserContext";
import FormInputComponent from "../../components/forms/FormInputComponent";
import {useForm} from "react-hook-form";
import homePic from "../../assets/desktop/backgrounds/noFilter.png";

// import {useHistory} from "react-router-dom";


function Overview() {

    // check dynamic params
    // niet undefined? Dan zoekopdracht triggeren waarin deze filters gebruikt worden
    // maak get request voor producten naar backend
    // wel undefined? Dan "begin met zoeken laten zien

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    // const history = useHistory();

    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite

    } = useContext(UserContext)

    const [itemType, setItemType] = useState("");
    const [itemName, setItemName] = useState("");
    const [areaCode, setAreaCode] = useState("");
    const [guild, setGuild] = useState("")


    const guilderItems = users.filter((users) => {
        return users.userRole === "GUILDER"
    })


    async function onSubmit(data) {
        console.log(data)
        setAreaCode(data.areaCode)
        setGuild(data.customerGuild)
        setItemType(data.itemType)
        setItemName(data.itemName)

    }

    const findUsers = guilderItems.filter((users) => {


        if (users.areaCode === areaCode && users.customerGuild === guild) {

            const products = users.items.filter((item) => {
                return item.itemType === itemType;

            });
            return !!products

            }

        // if (users.areaCode === areaCode && users.customerGuild === guild) {
        //
        //     const productName = users.items.filter((item) => {
        //         return item.name === itemName;
        //
        //     });
        //     return !!productName
        //
        // }
        //
        // if (users.areaCode === areaCode && users.customerGuild === guild) {
        //
        //     // const products = users.items.filter((item) => {
        //     //     return item.itemType === itemType;
        //     //
        //     // });
        //     return users
        //
        // }


    // if (users.areaCode === areaCode) {
        //     return users
        // }
        //
        // if (users.customerGuild === guild){
        //        return users
        // }
        //     if (users.areaCode === areaCode && users.customerGuild !== "NONE") {
        //         return users;
        //     }
        //     } if (users.areaCode !== areaCode && users.customerGuild === guild){
        //         return  users

    })






    return (
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={homePic} alt={homePic}/>
            <h1 className={styles.banner}>LOCAL SKILL</h1>
            <h2 className={styles.formHeader}>SEARCH</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.searchElement}>


                <label htmlFor="formItems">
                    <select name="customerGuild" {...register("customerGuild", {
                    })} className={styles.select}>
                        <option value="NONE">Please choose an Guild....</option>
                        <option value="FINANCE">Finance</option>
                        <option value="CONSTRUCTION">Construction</option>
                        <option value="CREATIVE_DESIGN">Creative design</option>
                        <option value="LEISURE">Leisure</option>
                        <option value="MEDIA">Media</option>
                        <option value="SECURITY">Security</option>
                        <option value="HEALTHCARE">Healthcare</option>
                        <option value="IT">IT</option>
                        <option value="BEAUTY">Beauty</option>
                        <option value="SPORT">Sport</option>
                        <option value="FOOD">Food</option>
                        <option value="HOBBY">Hobby</option>
                        <option value="SALES">Sales</option>
                        <option value="EDUCATION">Education</option>
                        <option value="LOGISTICS">Logistics</option>
                        <option value="LEGAL">Legal</option>
                        <option value="HUMAN_RESOURCES">Human resources</option>
                    </select>

                </label>

                <FormInputComponent
                    type="text"
                    className={styles.select}
                    name="areaCode"
                    placeHolder="Please insert your area code (for example: 1066SP)"
                    fieldRef={register('areaCode', {
                        // required: {
                        //     value: true,
                        //     message: 'This field must have an input',
                        // },
                        // pattern: {
                        //     value: /([0-9]{4}[A-Z]{2})/,
                        //     message: 'Please insert a valid area code (with caps)',
                        // },
                    })}
                    errors={errors}
                />

                <label htmlFor="formItems">
                    <select {...register("itemType")} className={styles.select}>
                        <option value="">Are you searching an item or service?</option>
                        <option value="PRODUCT">Product</option>
                        <option value="SERVICE">Service</option>
                    </select>
                </label>


                <FormInputComponent
                    type="text"
                    name="itemName"
                    className={styles.select}
                    placeHolder="What kind of product/service are you searching?"
                    fieldRef={register('itemName')}
                    errors={errors}
                />
                <button className={styles.button} type="submit" onClick={handleSubmit} disabled={pristine}>
                    SEARCH <img className={styles.img} src={find} alt={find}/>
                </button>
            </form>


            {/*{users && findUsers.item.map((item, index) => {*/}
            {/*    return <SingleItemComponent*/}
            {/*        key={index}*/}
            {/*        index={index}*/}
            {/*        item={item}*/}
            {/*        addToCart={addToCart}*/}
            {/*        removeFromCart={removeFromCart}*/}
            {/*        addToFavorite={addToFavorite}*/}
            {/*    />*/}

            {/*})}*/}


            {(users && findUsers.length === 0 ?
                    <>
                        <p className={styles.noSearchContainer}>
                            <div className={styles.noSearch}>NO SEARCH RESULTS</div>
                        </p>
                    </> :

                    <div>{findUsers.map((user, index) => {
                        return <article key={index}>

                            {user.items.length != null &&
                            <>
                                <div>{user.items.map((item, index) => {
                                    return <SingleItemComponent
                                        key={index}
                                        index={index}
                                        item={item}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                        addToFavorite={addToFavorite}
                                    />

                                })}</div>
                                    </>
                                }

                                </article>
                                })}</div>
                        )}


                    </div>
            );
            }

export default Overview;