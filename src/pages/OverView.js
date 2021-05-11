import React, {Fragment} from 'react';
import FilterScreen from "../components/forms/FilterScreen";
import Item from "../components/object/Item";


function Overview() {



    return (
        <Fragment>
            <h2>Overview page</h2>
            <FilterScreen/>
            <Item/>

        </Fragment>
    );
}

export default Overview;