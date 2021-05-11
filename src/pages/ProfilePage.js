import React, {Fragment} from 'react';

import CreateItem from "../components/forms/CreateItemForm";
import Orders from "./Orders";


function ProfilePage() {

    return (
        <Fragment>
            <h2>Profile page</h2>
            <Orders/>
            <CreateItem/>

        </Fragment>
    );
}

export default ProfilePage;