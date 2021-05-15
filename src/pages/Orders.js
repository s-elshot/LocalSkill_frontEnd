import React, {Fragment} from 'react';
import OrderForm from "../components/forms/OrderForm";
import Order from "../components/object/Order";



function Orders() {

    return (
        <Fragment>
            <Order/>
            <OrderForm/>

        </Fragment>
    );
}

export default Orders;