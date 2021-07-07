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

                <fieldset className={styles.profileOutline}>

                    {users && val &&
                    <div>
                        <h2 className={styles.profileHeader}>YOUR PROFILE</h2>

                        <ul className={styles.listOutline}>
                            <h2 className={styles.profileName}>{val.firstName} {val.lastName}
                                {val.guild != null && <> - {val.guild}</>}
                            </h2>
                            <li className={styles.listItem}><b>Email:</b> {val.emailAdress}</li>
                            <li className={styles.listItem}><b>Area Code:</b> {val.areaCode}</li>
                            <li className={styles.listItem}><b>City:</b> {val.city}</li>
                            {val.guild != null &&
                            <li className={styles.listItem}><b>Guild:</b> {val.guild}</li>
                            }
                            <li className={styles.listItem}><b>Type account:</b> {val.userRole} </li>

                            <div className={styles.navContainer}>
                                <NavLink to={"/profile/itemsInPossession"}
                                         activeClassName={styles.entranceLinkContainer}>
                                    {val.guild === null ?
                                        <p className={styles.entranceLink}>PREVIOUSLY BOUGHT ITEMS</p> :
                                        <p className={styles.entranceLink}>ITEMS IN POSSESSION</p>
                                    }
                                </NavLink>

                                <NavLink to={"/profile/orders"} activeClassName={styles.entranceLinkContainer}>
                                    <p className={styles.entranceLink}>YOUR ORDERS</p>
                                </NavLink>

                                <NavLink to="/profile/userDetails" activeClassName={styles.entranceLinkContainer}>
                                    <p className={styles.entranceLink}>EDIT YOUR ACCOUNT</p>
                                </NavLink>

                                <NavLink to="/profile/deleteAccount" activeClassName={styles.entranceLinkContainer}>
                                    <p className={styles.entranceLink}>DELETE YOUR ACCOUNT</p>
                                </NavLink>

                            </div>

                        </ul>
                    </div>
                    }


                </fieldset>
            </div>
        </Fragment>
    );
}

export default Profile;