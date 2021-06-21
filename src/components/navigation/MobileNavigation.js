import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./MobileNavigation.module.css"
import {UserContext} from "../../context/UserContext";
import favoriteImage from "../../assets/mobileIcons/Icon material-favorite-border-white.png"
import favoriteImageFilled from "../../assets/mobileIcons/Icon material-favorite hart white fill.png"
import home from "../../assets/mobileIcons/Icon awesome-home@2x.png"
import search from "../../assets/mobileIcons/Icon awesome-search@2x.png"
import account from "../../assets/mobileIcons/Icon material-account-circle@2x.png"
import mobileCart from "../../assets/mobileIcons/Icon awesome-shopping-cart@2x.png"
import logIn from "../../assets/mobileIcons/Icon open-account-login@2x.png"
import logout from "../../assets/mobileIcons/Icon open-account-logout@2x.png"
import {AuthContext} from "../../context/AuthContext";

function MobileNavigation() {

    const {signedIn, cart, favorite, changeState} = useContext(UserContext)
    const {logOUt} = useContext(AuthContext)

    return (
        <>
            <div className={styles.mobileNavContainer}>
                <ul className={styles.mobNavUl}>

                    <li className={styles.mobNavUl}>

                        <NavLink to="/homePage" activeClassName="active-link">
                            <img className={styles.image} src={home} alt={home}/>
                            <div className={styles.navText}>HOME</div>
                        </NavLink>
                    </li>

                    {signedIn === false &&
                    <>
                        <li className={styles.mobNavUl}>
                            <NavLink to="/logIn" activeClassName="active-link">
                                <img className={styles.image} src={logIn} alt={logIn}/>
                                <div className={styles.navText}>LOG IN</div>
                            </NavLink>
                        </li>

                        <li className={styles.mobNavUl}>
                            <NavLink to="/signUp" activeClassName="active-link">
                                <img className={styles.image} src={account} alt={account}/>
                                <div className={styles.navText}>SIGNUP</div>
                            </NavLink>
                        </li>
                    </>
                    }


                    {signedIn === true &&
                    <>
                        <li className={styles.mobNavUl}>
                            <NavLink to="/profile" activeClassName="active-link">
                                <img className={styles.image} src={account} alt={account}/>
                                <div className={styles.navText}>PROFILE</div>
                            </NavLink>
                        </li>

                        <li className={styles.mobNavUl}>
                            <NavLink exact to="/overview" activeClassName="active-link">
                                <img className={styles.image} src={search} alt={search}/>
                                <div className={styles.navText}>OVERVIEW</div>
                            </NavLink>
                        </li>

                        <li className={styles.mobNavUl}>
                            <NavLink to="/shoppingCart" activeClassName="active-link">
                                <img className={styles.image} src={mobileCart} alt={mobileCart}/>

                                {cart.length > 0 &&
                                <>
                                    <span className={styles.navTextNumber}> {cart.length} </span>
                                </>}
                                <div className={styles.navText}>SHOPPING</div>
                            </NavLink>
                        </li>

                        <li className={styles.mobNavUl}>
                            <NavLink to="/favorites" activeClassName="active-link">
                                {favorite.length <= 0 ?
                                    <img className={styles.image} src={favoriteImage} alt={favorite}/> :
                                    <>
                                        <img className={styles.image} src={favoriteImageFilled} alt={favorite}/>
                                        <span className={styles.navTextNumber}>{favorite.length} </span>
                                    </>}
                                <div className={styles.navText}>FAVORITES</div>
                            </NavLink>
                        </li>

                        <li className={styles.mobNavUl}>
                            <NavLink to="/" activeClassName="active-link">
                                <img className={styles.image} src={logout} alt={logout}
                                onClick={changeState}/>
                                    {logOUt}
                                <div className={styles.navText}>{signedIn ?'LOG OUT' : 'LOG IN'}</div>
                            </NavLink>
                        </li>

                    </>
                    }

                </ul>
            </div>

        </>
    );
}

export default MobileNavigation;