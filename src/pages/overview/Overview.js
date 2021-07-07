import React, {
    useContext, useState
    // , useState
} from 'react';

import styles from "./Overview.module.css"
import find from "../../assets/mobileIcons/Icon awesome-search@2x.png"
import {UserContext} from "../../context/UserContext";
import FormInputComponent from "../../components/forms/FormInputComponent";
import {useForm} from "react-hook-form";
import homePic from "../../assets/desktop/backgrounds/noFilter.png";

import SingleItemComponent from "../../components/object/SingleItemComponent";
import buildFilter from "../../helper/buildFilter";





// @todo: helperfunctie declaratie, deze mag in een apart bestand uiteindelijk!
// we filteren de properties met lege arrays erin, eruit!
// function buildFilter(filter) {
//     let activeFilters = {};
//     for (let keys in filter) {
//         if (filter[keys].length > 0) {
//             activeFilters[keys] = filter[keys];
//         }
//     }
//     return activeFilters;
// }



function Overview() {
    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite
    } = useContext(UserContext);
    const [displayedItems, setDisplayedItems] = useState([]);
    const {handleSubmit, register, pristine, formState: {errors}} = useForm({mode: "onBlur"});

    function onSubmit(data) {
        const userFilters = {
            areaCode: (data.areaCode && [data.areaCode]) || [],
            userRole: ['GUILDER'],
            customerGuild: (data.customerGuild && [data.customerGuild]) || [],
        }

        console.log(userFilters);

        const itemFilters = {
            itemName: (data.itemName && [data.itemName]) || [],
            itemType: (data.itemName && [data.itemType]) || [],
        }

        console.log(itemFilters);

        // hier maken we de arrays met filters die ook daadwerkelijk togepast moeten worden
        const activeUserFilters = buildFilter(userFilters);
        const activeItemFilters = buildFilter(itemFilters);

        console.log(activeUserFilters, activeItemFilters);

        // Maak alvast een lege array voor alle toekomstige items
        let items = [];



        // FILTER EERST DE USERS OP BASIS VAN DYNAMISCHE FILTERS
        users.filter((user) => {
            for (let key in activeUserFilters) {
                if (user[key] === undefined || !activeUserFilters[key].includes(user[key])) {
                    return false;
                }
            }
            // dit willen we niet!
            // items = [[.., ..,..], [..,..,..]];

            // als deze gebruiker aan de filters voldoet
            // map dan over al zijn items heen en zet die in de variabele ITEMS
            user.items.map((item) => {
                return items.push(item)
            });
            return true;
        });
        console.log(items);

        // FILTER DAARNA DE ITEMS OP BASIS VAN DYNAMISCHE FILTERS
        const filteredItems = items.filter((item) => {
            for (let key in activeItemFilters) {
                if (item[key] === undefined || !activeItemFilters[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });
        // zet de items in de state zodat we ze kunnen weergeven op de pagina!
        setDisplayedItems(filteredItems);
        console.log(filteredItems);
    }


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
                    fieldRef={register('itemName')}
                    errors={errors}
                />
                <button className={styles.button} type="submit" disabled={pristine}>
                    Filter <img className={styles.img} src={find} alt={find}/>
                </button>
            </form>


            {users && displayedItems && displayedItems.map((item, index) => {
                return <SingleItemComponent
                    key={index}
                    index={index}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    addToFavorite={addToFavorite}
                />
            })}


            {/*{(users && findUsers.length === 0 ?*/}
            {/*        <>*/}
            {/*            <p className={styles.noSearchContainer}>*/}
            {/*                <div className={styles.noSearch}>NO SEARCH RESULTS</div>*/}
            {/*            </p>*/}
            {/*        </> :*/}

            {/*        <div>{findUsers.map((user, index) => {*/}
            {/*            return <article key={index}>*/}

            {/*                {user.items.length != null &&*/}
            {/*                <>*/}
            {/*                    <div>{user.items.map((item, index) => {*/}
            {/*                        return <SingleItemComponent*/}
            {/*                            key={index}*/}
            {/*                            index={index}*/}
            {/*                            item={item}*/}
            {/*                            addToCart={addToCart}*/}
            {/*                            removeFromCart={removeFromCart}*/}
            {/*                            addToFavorite={addToFavorite}*/}
            {/*                        />*/}

            {/*                    })}</div>*/}
            {/*                        </>*/}
            {/*                    }*/}

            {/*                    </article>*/}
            {/*                    })}</div>*/}
            {/*            )}*/}

            {/*<Item/>*/}
                    </div>
            );

            }

export default Overview;