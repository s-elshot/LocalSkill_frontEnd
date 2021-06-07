import React from 'react';
// import enterScreen from "./../assets/backgrounds/Enter Screen.png";
import styles from "./Entrance.module.css"
import {NavLink} from "react-router-dom";
import photographer from "../../assets/mobileIcons/pexels-photo-1214566.png";
// import home from "../assets/mobileIcons/Icon awesome-home@2x.png"
// import user from "../assets/mobileIcons/Icon material-account-circle@2x.png"
// import search from "../assets/mobileIcons/Icon awesome-search@2x.png"
// import shopping from "../assets/mobileIcons/Icon awesome-shopping-cart@2x.png"


function Entrance() {


    return (
            <div className={styles.container}>
                <h1 className={styles.enterText}>LOCAL SKILL</h1>
                <img className={styles.entrancePhoto} src={photographer} alt="entrance"/>
                <div className={styles.enterBanner}>LOCAL SKILL - bringing the hood together</div>

                <span className={styles.enterButtonContainer}>
                    <NavLink to="/signUp" activeClassName="entranceLink">SIGN UP</NavLink>
                    <NavLink to="/overview" activeClassName="entranceLink">ENTER</NavLink>
                    <NavLink to="/logIn" activeClassName="entranceLink">LOG IN</NavLink>
                </span>
            </div>
    );
}

export default Entrance;