import React, {useContext, useState} from 'react';

import './CreateItemForm.module.css';
import axios from "axios";
import {NavLink, useHistory} from "react-router-dom"

import {UserContext} from "../../context/UserContext";
import {ReactComponent as LoadingIcon} from "../../assets/mobileIcons/Spin-1s-200px.svg";


// import lampMan from "../../assets/backgrounds/Image.png";


function CreateItemForm() {

    const [loading, toggleLoading] = useState(false)

    const [registerSucces, toggleRegisterSucces] = useState(false)
    const history = useHistory();

    async function onSubmit(id) {
        // console.log(id)
        toggleLoading(true)
        try {
            await axios.delete(`http://localhost:8080/item/${id}`,{
                method: "DELETE",
            }).then(() => {
                console.log("Item deleted")
            })
            toggleRegisterSucces(true)
            setTimeout(() => {
                history.push("http://localhost:3000");
            })
        } catch (e) {
            console.error(e)
        }
        toggleLoading(false)
    }

    const {
        items,
        error,
    } = useContext(UserContext)



    return (
        <>

            {loading &&
            <>
                <LoadingIcon className="loader"/>
                <p>Loading....</p>
            </>
            }
            {error && <div>ERROR: {error}</div>}

            <h2 className="formHeader">DELETE PRODUCT</h2>


            {/* eslint-disable-next-line array-callback-return */}
            {items && items.map((item, index) => {
                return <div key={index} className="item">
                    {/*<h3>{item.content}</h3>*/}
                    <NavLink exact to={`/Item/${item.id}`}>
                        <h3> {item.name}</h3>
                    </NavLink>
                    <p>description: {item.description}</p>
                    <p>price: €{item.price}</p>
                    <p>Kind of product:{item.itemType}</p>
                    <button onClick={()=>onSubmit(item.id)}>DELETE ITEM</button>
                </div>
            })}

            {loading === true &&
            <span>Loading...</span>}

            {registerSucces === true &&
            <span>New item created succeeded</span>}

       </>
    )
}



export default CreateItemForm