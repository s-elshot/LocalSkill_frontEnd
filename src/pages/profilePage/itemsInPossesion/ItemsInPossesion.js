import React, {Fragment, useContext} from 'react';
import {UserContext} from "../../../context/UserContext";
import styles from "./ItemsInPossesion.module.css"
import background from "../../../assets/desktop/backgrounds/pexels-profile-2.png"
import {ReactComponent as LoadingIcon} from "../../../assets/mobileIcons/Spin-1s-200px.svg"
import {NavLink, useHistory} from "react-router-dom";
import axios from "axios";

function ItemsInPossession() {

    const {
        users,
        error,
        loading,
    } = useContext(UserContext)

    const userId = 2000;
    const val = users.find(user => {
        return user.id === userId
    })

    console.log(val)


    const history = useHistory();

    async function removeItem({id}) {

        // toggleLoading(true)
        try {
            await axios.delete(`http://localhost:8080/item/${id}`,{
                method: "DELETE",
            }).then(() => {
                console.log("Item deleted")
            })

            setTimeout(() => {
                history.push("/itemsInPossession");
            })
        } catch (e) {
            console.error(e)
        }
        // toggleLoading(false)
    }


    return (
        <Fragment>
            <div className={styles.container}>
            <img src={background} className={styles.background} alt={background}/>

            {loading && <>
                <LoadingIcon className={styles.loader}/>
                <p>Loading....</p>
            </>
            }
            {error && <div>ERROR: {error}</div>}

            <fieldset className={styles.outline}>
            <h2 className={styles.header}>CURRENT ITEMS</h2>

                {val.customerGuild != null &&
                <NavLink to={"/profile/createItem"}>
                    <div className={styles.createButton}>CREATE NEW ITEM +</div>
                </NavLink>
                }
            {users && val &&
                <div>{val.items.map((item, index) => {
                    return <article key={index} className={styles.itemCard}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>€ {item.price}</p>
                        <p>ID: {item.id}</p>
                        {val.customerGuild != null && <>
                        <button onClick={()=>removeItem(item)}>DELETE ITEM</button>
                            </>
                        }
                    </article>

                }
                )}</div>

            }

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
            </fieldset>
            </div>

        </Fragment>
    )
}


export default ItemsInPossession;