import React, {Fragment} from 'react';

import CreateItem from "../../components/forms/CreateItemForm";
import ItemsInPossesion from "../../components/object/ItemsInPossesion";
// import DeleteItemForm from "../../components/forms/DeleteItemForm";

function ProfilePage() {

    return (
        <Fragment>


            <CreateItem/>
            <ItemsInPossesion/>
            {/*<DeleteItemForm/>*/}
        </Fragment>
    );
}

export default ProfilePage;