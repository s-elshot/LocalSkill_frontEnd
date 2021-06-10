import React, {Fragment, useContext} from 'react';
import {UserContext} from "../../../context/UserContext";

import {ReactComponent as LoadingIcon} from "../../../assets/mobileIcons/Spin-1s-200px.svg"
import styles from "./OrdersInPossesion.module.css"
import background from "../../../assets/desktop/backgrounds/logIn.png";


// import {NavLink} from "react-router-dom";


function ItemsInPossession() {

    const {
        users,
        error,
        loading,
    } = useContext(UserContext)

    const userId = 2
    const val = users.find(user => {
        return user.id === userId
    })



    return (
        <Fragment>
            <div className={styles.container}>
                <img src={background} className={styles.background} alt={background}/>
                {loading && <>
                    <LoadingIcon className="loader"/>
                    <p>Loading....</p>
                </>
                }
                {error && <div>ERROR: {error}</div>}

                <fieldset className={styles.orderOutline}>
                    <h2 className={styles.header}>ALL ORDERS</h2>

                    {(users && val.invoices.length === 0 ?
                            <>
                                <article className={styles.orderCard}>
                                    You don't have any orders yet
                                </article>
                            </> :

                            <div>{val.invoices.map((order, index) => {
                                return <article key={index} className={styles.orderCard}>
                                    <h3>ORDER: {order.id}</h3>
                                    <p><b>Order description:</b> {order.description}</p>

                                    {order.invoiceItems.length != null &&
                                    <>
                                        <h4>Items :</h4>
                                        <div>{order.invoiceItems.map((item, index) => {
                                            return < article key={index}>
                                                <fieldset className={styles.orderedItemCard}>
                                                    <h3>{item.name}</h3>
                                                    <p className={styles.listItem}>
                                                        <li>Description: {item.description}</li>
                                                        <li>Type: {item.itemType}</li>
                                                        <li>Price: €{item.price}</li>
                                                    </p>
                                                </fieldset>

                                            </article>

                                        })}</div>
                                    </>
                                    }

                                    {val.message != null &&
                                    <p><b>POSTED MESSAGES</b> {order.message}</p>
                                    }


                                </article>
                            })}</div>
                    )}
                </fieldset>
            </div>
        </Fragment>
    )
}

export default ItemsInPossession;