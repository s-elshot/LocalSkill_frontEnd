import React, {
    Fragment, useContext,

    // useState
    // , useEffect

} from 'react';
// import axios from "axios";
import {UserContext} from "../../context/UserContext";
// import {NavLink} from "react-router-dom";
import {ReactComponent as LoadingIcon} from "../../assets/mobileIcons/Spin-1s-200px.svg"


// import {NavLink} from "react-router-dom";


function ItemsInPossesion() {

    const {
        users,
        error,
        loading,

    } = useContext(UserContext)

    // const [searchUsers, setSearchUsers] = useState("");






    console.log(users);

    // const data = {
    //     title: "title1",
    //     bar: "asdf",
    //     innerData: [
    //         {
    //             title: "inner-title1",
    //             foo: "asdf"
    //         },
    //         {
    //             title: "inner-title2",
    //             foo: "asdf"
    //         }
    //     ]
    // };
    //
    // const innerData = JSON.parse(JSON.stringify([data, ...data.innerData], ["title"]))
    //
    // console.log(innerData);



    return (
        <Fragment>
            {loading && <>
                <LoadingIcon className="loader"/>
                <p>Loading....</p>
            </>
            }
            {error && <div>ERROR: {error}</div>}

            <h2 className="formHeader">SEARCH</h2>
            {/*<input type="text" placeholder="Search email adress"*/}
            {/*       onChange={event => {*/}
            {/*           setSearchUsers(users)*/}

            {/*           console.log(users)*/}
            {/*           console.log(searchUsers)*/}
            {/*       }}/>*/}

            {/*{users && users.map((val, key) => {*/}
            {/*    return <>*/}
            {/*    <div>{val.emailAdress}</div>*/}
            {/*    <ul>{val.items((sub)=>*/}
            {/*    <li>*/}
            {/*        {sub.name}*/}
            {/*    </li>*/}
            {/*    )}*/}
            {/*    </ul>*/}
            {/*    </>*/}
            {/*})*/}
            {/*}*/}


        </Fragment>
    )
}


export default ItemsInPossesion;