import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
// import Button from "../logIn/Button";


function Item() {

    const [items, setItems] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    // const [guild, SetGuild] = useState("");


    const fetchItems = () => {
        axios.get("http://localhost:8080/item").then(res => {
            setItems(res.data)
        });


    };

    useEffect(() => {
        fetchItems();
    }, []);

    // useEffect(() => {

    //     async function fetchData() {
    //         try {
    //             const {data} = await axios.get("http://localhost:8080/item");
    //
    //             console.log(data[0].name)
    //             console.log(data[0].description)
    //             console.log(data[0].price)
    //             console.log(data[0].content)
    //             setItems(data);
    //
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchData();
    // }, []);


    return (
        <Fragment>
            <input type="text" placeholder="Search products or services"
                   onChange={event => {setSearchTerm(event.target.value)}}/>

            {/*<input type="text" placeholder="Search products or services"*/}
            {/*       onChange={event => {setSearchTerm(event.target.value)}}/>*/}
            {/* eslint-disable-next-line array-callback-return */}
            {items && items.filter((val) =>{
                if (searchTerm === ""){
                    return val
                } else  if (val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    // && val.customer.areaCode.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                    return val
                }
            }).map((item, index) => {
                return <div key={index} className="item">
                    {/*<h3>{item.content}</h3>*/}
                    <h4>{item.name}</h4>
                    <p>description: {item.description}</p>
                    <p>price: €{item.price}</p>

                </div>
            })}
        </Fragment>
    )
}


export default Item;