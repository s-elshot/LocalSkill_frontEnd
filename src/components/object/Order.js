import React, {useEffect, useState} from 'react';
import axios from "axios";



function Order() {

    const [orders, setOrders] = useState(null);

    const fetchOrders = () => {
        axios.get("http://localhost:8080/order").then(res => { setOrders(res.data)
        });
    };

    useEffect(() => {
        fetchOrders();
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
        orders && orders.map((order, index) => {
            return <div key={index} >
                {/*<h3>{item.content}</h3>*/}
                <h4>Order id: {order.id}</h4>
                <p>Customer: {order.customer.firstName} {order.customer.lastName}</p>
                <p>Area code: {order.customer.areaCode}</p>
            </div>

        })

    )
}


export default Order;