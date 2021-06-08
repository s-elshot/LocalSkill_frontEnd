import React, {Fragment, useContext} from 'react';
import styles from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import guy from "../../../src/assets/desktop/backgrounds/pexels-photo-statueFace.png"
import {UserContext} from "../../context/UserContext";
import {ReactComponent as LoadingIcon} from "../../assets/mobileIcons/Spin-1s-200px.svg";


function Profile() {

    const {
        users,
        error,
        loading,
    } = useContext(UserContext)

    const userId = 2;
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

            <div className={styles.container}>
                <img className={styles.background} src={guy} alt={guy}/>

                <fieldset className={styles.signUpForm}>

                    {users &&
                    <div>MY PROFILE INFO:
                        <ul>
                            <li>Name: {val.firstName} {val.lastName}</li>
                            <li>Email:{val.emailAdress}</li>
                            <li>City: {val.city}</li>
                            {val.guild != null &&
                            <li>Guild: {val.guild}</li>
                            }
                            <li>Type account: {val.userRole} {val.lastName}</li>

                        </ul>
                    </div>
                    }

                    <div className={styles.navContainer}>
                        <NavLink to={"/profile/itemsInPossession"} activeClassName={styles.entranceLinkContainer}>
                            <p className={styles.entranceLink}>ITEMS IN POSSESSION</p>
                        </NavLink>

                        <NavLink to={"/profile/orders"} activeClassName={styles.entranceLinkContainer}>
                            <p className={styles.entranceLink}>YOUR ORDERS</p>
                        </NavLink>

                        <NavLink to="/profile/userDetails" activeClassName={styles.entranceLinkContainer}>
                            <p className={styles.entranceLink}>EDIT YOUR ACCOUNT</p>
                        </NavLink>
                    </div>
                </fieldset>
            </div>
        </Fragment>
    );
}

export default Profile;