import React, {
    Fragment, useContext
    // , useState,

    // useState
    // , useEffect

} from 'react';
// import axios from "axios";
import {UserContext} from "../../../context/UserContext";
import styles from "./ItemsInPossesion.module.css"
import background from "../../../assets/desktop/backgrounds/pexels-profile-2.png"
import {ReactComponent as LoadingIcon} from "../../../assets/mobileIcons/Spin-1s-200px.svg"
import {NavLink} from "react-router-dom";



// import {NavLink} from "react-router-dom";


function ItemsInPossession() {

    const {
        users,
        error,
        loading,
    } = useContext(UserContext)

    // const [searchUsers, setSearchUsers] = useState("");
    const userId = 2;
    const val = users.find(user => {
        return user.id === userId
    })

    function removeItem() {
        console.log("clicked")
    }

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

            <fieldset className={styles.outline}>
            <h2 className={styles.header}>CURRENT ITEMS</h2>
            {/*<input type="text" placeholder="Search email adress"*/}
            {/*       onChange={event => {*/}
            {/*           setSearchUsers(users)*/}
            {/*           console.log(users)*/}
            {/*           console.log(searchUsers)*/}
            {/*           console.log(users[0].items[1].name)*/}

            {/*       }}/>*/}

                {val.guild != null &&
                <NavLink to={"/profile/createItem"}>
                    <div className={styles.createButton}>CREATE NEW ITEM +</div>
                </NavLink>
                }
            {users &&
                <div>{val.items.map((item, index) => {
                    return <article key={index} className={styles.itemCard}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>€ {item.price}</p>
                        {val.guild != null &&
                        <button onClick={removeItem}>- remove from account</button>
                        }
                    </article>

                })}</div>

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