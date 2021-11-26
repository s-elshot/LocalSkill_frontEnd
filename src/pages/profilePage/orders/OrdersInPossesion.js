import React, {Fragment, useContext} from 'react';
import {UserContext} from "../../../context/UserContext";
import {ReactComponent as LoadingIcon} from "../../../assets/mobileIcons/Spin-1s-200px.svg"
import styles from "./OrdersInPossesion.module.css"
import background from "../../../assets/desktop/backgrounds/logIn.png";

function ItemsInPossession() {

    const {
        users,
        error,
        loading,
        userLogIn

    } = useContext(UserContext)


    const val = users.find(user => {
        return user.username === userLogIn
    })

    console.log(val.invoices)
    console.log(val.invoices.length)
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


                    {(users && val.invoices && val.invoices.length === 0 ?

                                <article className={styles.orderCard}>
                                    You don't have any orders yet
                                </article>
                            :

                            <div>{val.invoices.map((order, index) => {
                                return <article key={index} className={styles.orderCard}>
                                    <h3>ORDER: {order.id}</h3>
                                    <p><b>Order description:</b> {order.description}</p>

                                    {order.itemsOnInvoice.length === 0 ?

                                            <article className={styles.orderCard}>
                                                No items are placed on the order, Please contact the supplier
                                            </article>

                                        :

                                    <>
                                        <h4>Items :</h4>
                                        <div>{order.itemsOnInvoice.map((item, index) => {
                                            return < article key={index}>

                                                <fieldset className={styles.orderedItemCard}>
                                                    <h3>{item.name}</h3>
                                                    <p className={styles.listItem}>
                                                        <li>Description: {item.description}</li>
                                                        <li>Type: {item.itemType}</li>
                                                        <li>Price: €{item.price}</li>
                                                    </p>
                                                </fieldset>

                                                {/*{users && users.map((val, key) => {*/}
                                                {/*    */}
                                                {/*    */}
                                                {/*    return <>*/}
                                                {/*        <div id={key}>{val.emailAdress}*/}
                                                {/*            <div>{val.items.map((item, key)=>{*/}
                                                {/*                return<>*/}
                                                {/*                <p>{item.name}</p>*/}
                                                {/*                </>*/}
                                                {/*            })}</div>*/}
                                                {/*        </div>*/}
                                                {/*    /!*<ul>{val.items((sub)=>*!/*/}
                                                {/*    /!*<li>*!/*/}
                                                {/*    /!*    {sub.name}*!/*/}
                                                {/*    /!*</li>*!/*/}
                                                {/*    /!*)}*!/*/}
                                                {/*    /!*</ul>*!/*/}
                                                {/*    </>*/}
                                                {/*})*/}
                                                {/*}*/}

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