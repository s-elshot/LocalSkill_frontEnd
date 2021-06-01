import React, {
    Fragment, useContext
    // , useState,

    // useState
    // , useEffect

} from 'react';
// import axios from "axios";
import {UserContext} from "../../context/UserContext";

import {ReactComponent as LoadingIcon} from "../../assets/mobileIcons/Spin-1s-200px.svg"


// import {NavLink} from "react-router-dom";


function ItemsInPossession() {

    const {
        users,
        error,
        loading,
    } = useContext(UserContext)

    // const [searchUsers, setSearchUsers] = useState("");
    const userId = 1;
    const val = users.find(user => {
        return user.id === userId
    })


    return (
        <Fragment>
            {loading && <>
                <LoadingIcon className="loader"/>
                <p>Loading....</p>
            </>
            }
            {error && <div>ERROR: {error}</div>}

            <h2 className="formHeader">CURRENT ITEMS</h2>
            {/*<input type="text" placeholder="Search email adress"*/}
            {/*       onChange={event => {*/}
            {/*           setSearchUsers(users)*/}
            {/*           console.log(users)*/}
            {/*           console.log(searchUsers)*/}
            {/*           console.log(users[0].items[1].name)*/}

            {/*       }}/>*/}

            {users &&
            <div>ITEMS BELONGING TO THE ACCOUNT: {val.emailAdress}
                <div>{val.items.map((item, index) => {
                    return <article key={index}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>€ {item.price}</p>
                    </article>
                })}</div>
            </div>
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

        </Fragment>
    )
}


export default ItemsInPossession;