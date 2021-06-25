import React, {useContext, useState} from 'react';

import styles from "./Overview.module.css"
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png"

import OverviewComponent from "../../components/object/overviewComponent";
// import ItemOverview from "./ItemOverview";


import SingleItemComponent from "../../components/object/SingleItemComponent";
import {UserContext} from "../../context/UserContext";
import FormInputComponent from "../../components/forms/FormInputComponent";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";



function Overview() {

    // check dynamic params
    // niet undefined? Dan zoekopdracht triggeren waarin deze filters gebruikt worden
    // maak get request voor producten naar backend
    // wel undefined? Dan "begin met zoeken laten zien

    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});
    const history = useHistory();

    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite

    } = useContext(UserContext)

    const [productType, setProductType] = useState("");
    const [productName, setProductName] = useState("");
    const [
        areaCode,
        setAreaCode] = useState("");
    const
        [
            guild,
        setGuild] = useState("")


    const guilderItems = users.filter((users) => {
        return users.userRole === "GUILDER"
        // if (users.areaCode === areaCode) {
        //
        //     const products = users.items.filter((item) => {
        //         return item.itemType === itemType;
        //     });
        //     return !!products
        // };
    })

    async function onSubmit(data) {
        console.log(data)
        console.log(guilderItems)


        // console.log(data.customerGuild)
        // console.log(data.firstName)
        // console.log(data.itemType)
        // history.push(`/overview/${data.itemType}/${data.areaCode}`)
        // history.push(`/overview/${data.customerGuild}/${data.areaCode}`)
    }

    function ButtonClick(){
        console.log(guild)
        console.log(areaCode)
        console.log(users)
        console.log(productType)
        console.log(productName)
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

            <form  onSubmit={handleSubmit(onSubmit)} className={styles.searchElement}>


                <label htmlFor="formItems">
                    <select name="customerGuild" {...register("customerGuild",{ required: true, message: 'You must specify an Guild'})} className={styles.select}>
                        <option value="">Please choose an Guild....</option>
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
                        <option value="IT">IT</option>
                        <option value="BEAUTY">Beauty</option>
                        <option value="SPORT">Sport</option>
                        <option value="FOOD">Food</option>
                        <option value="HOBBY">Hobby</option>
                        <option value="SALES">Sales</option>
                        <option value="EDUCATION">Education</option>
                        <option value="HEALTHCARE">Healthcare</option>
                    </select>
                    {errors.customerGuild && <span>{errors.customerGuild.message}</span>}
                </label>

                <FormInputComponent
                    type="text"
                    className={styles.select}
                    name="areaCode"
                    placeHolder="Please insert your area code (for example: 1066SP)"
                    fieldRef={register('areaCode', {
                        required: {
                            value: true,
                            message: 'This field must have an input',
                        },
                        pattern: {
                            value: /([0-9]{4}[A-Z]{2})/,
                            message: 'Please insert a valid area code (with caps)',
                        },
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
                    fieldRef= {register('itemName' )}
                    errors={errors}
                />
                <button className={styles.button} type="submit" onClick={handleSubmit} disabled={pristine}>
                    QUICK SEARCH <img className={styles.img} src={find} alt={find}/>
                </button>
            </form>


            {/*<fieldset className={styles.searchElement}>*/}

            {/*    <input className={styles.input}  type="text" placeholder="Set your Guild"*/}
            {/*           onChange={event => {*/}
            {/*               setGuild(event.target.value)*/}
            {/*           }}/>*/}

            {/*    <input className={styles.input}  type="text" placeholder="Set your areaCode"*/}
            {/*           onChange={event => {*/}
            {/*               setAreaCode(event.target.value)*/}
            {/*           }}/>*/}

            {/*    <input  className={styles.input} type="text" placeholder="Search products / services"*/}
            {/*           onChange={event => {*/}
            {/*               setProductType(event.target.value)*/}
            {/*           }}/>*/}


            {/*    <input className={styles.input} type="text" placeholder="Search product name"*/}
            {/*           onChange={event => {*/}
            {/*               setProductName(event.target.value)*/}
            {/*           }}/>*/}



            {/*    <button className={styles.button} type="submit"  onClick={ButtonClick}><img className={styles.img} src={find} alt={find}/></button>*/}
            {/*</fieldset>*/}





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

            {/* eslint-disable-next-line array-callback-return */}
            {users && guilderItems.filter((val) => {
                //
                // if (customerGuild === "" && areaCode  === "") {
                //     return val;
                // } else if (val.areaCode.toUpperCase().includes(areaCode.toLowerCase()) && productName === "") {
                //     return val;
                // } else if (productName === "" && searchPrice < val.price) {
                //     return val;
                // } else if (val.name.toLowerCase().includes(searchProductName.toLowerCase()) && searchPrice < val.price) {
                //     return val;
                // }
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


            {/*<ItemOverview/>*/}

        </div>
    );
}

export default Overview;