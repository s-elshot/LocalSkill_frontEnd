import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import SingleItemComponent from "../../components/object/SingleItemComponent";
import styles from "./OverviewDynamic.module.css";
import homePic from "../../assets/desktop/backgrounds/pexels-photo-statueFace.png";
import NoQuickSearchResult from "./NoQuickSearchResult";

function OverviewDynamic() {

    const {
        users,
        addToCart,
        removeFromCart,
        addToFavorite
    } = useContext(UserContext)


    const {areaCode, customerGuild} = useParams();


    const guilderItems = users.filter((users) => {
        return users.areaCode === areaCode && users.customerGuild === customerGuild

    })

    const testFilter = guilderItems.filter((users) => {
        return users.areaCode === areaCode && users.customerGuild === customerGuild
    })

    return (
        <>
            <div className={styles.container}>

                {users && testFilter.length === 0 ?
                    <>
                        <NoQuickSearchResult/>
                    </> :
                    <>
                        <img className={styles.backgroundImage} src={homePic} alt={homePic}/>
                        <h1 className={styles.enterText}>LOCAL SKILL</h1>
                        <fieldset className={styles.searchElement}>
                            <h2 className={styles.formHeader}>GUILD - {customerGuild}</h2>
                            <h3>area code - {areaCode}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores assumenda
                                consequatur dignissimos dolor dolorem earum esse et inventore iusto, labore minus
                                perferendis
                                quaerat quis reiciendis. Atque corporis cum eius explicabo impedit incidunt ipsum iste
                                laudantium maiores minima mollitia nobis non, porro quibusdam quos reiciendis saepe sed
                                sequi
                                ullam voluptatibus!</p>
                        </fieldset>

                        {users && guilderItems.map((item, index) => {
                            return item.items.map((item, index) => {
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
                    </>}
            </div>
        </>
    );
}

export default OverviewDynamic;