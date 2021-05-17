import React, {useContext} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import './Navigation.css'
import {UserContext} from "../../context/UserContext";
import LogInButton from "../logIn/LoginButton";
import blackShoppingCart from "../../assets/mobileIcons/Icon awesome-shopping-cart black@2x.png"


function Navigation() {

    const {signedIn, cart} = useContext(UserContext)

    return (
        <>
            <div className="navContainer">
                <h1>NAVIGATION</h1>
                <ul className="navUl">

                    <li className="navBarUl">
                        <NavLink to="/" activeClassName="active-link">HOME PAGE</NavLink>
                    </li>

                    {signedIn === false &&
                    <>
                        <li className="navBarUl">
                            <NavLink to="/logIn" activeClassName="active-link">LOG IN</NavLink>
                        </li>
                        <li className="navBarUl">
                            <NavLink to="/signUp" activeClassName="active-link">SIGN UP</NavLink>
                        </li>

                    </>
                    }


                    {signedIn === true
                        ? <>
                            <li className="navBarUl">
                                <NavLink to="/profilePage" activeClassName="active-link">PROFILE PAGE</NavLink>
                            </li>

                            <li className="navBarUl">
                                <NavLink exact to="/guildOverview" activeClassName="active-link">GUILD OVERVIEW
                                    PAGE</NavLink>
                            </li>

                            <li className="navBarUl">
                                <NavLink to="/shoppingCart" activeClassName="active-link">SHOPPING CART</NavLink>
                            </li>

                            <li className="navBarUl">
                                <NavLink to="/orders" activeClassName="active-link">ORDERS</NavLink>
                                {cart.length > 0 &&
                                <>
                                    <img className="navShoppingCart" src={blackShoppingCart} alt="shopping cart"/>
                                    <div>{cart.length} items)</div>
                                </>}
                            </li>

                            <li className="navBarUl">
                                <NavLink to="/loginButton" activeClassName="active-link"><LogInButton/></NavLink>
                            </li>

                        </>
                        : <Redirect to={"/"}/>
                    }

                </ul>
            </div>

        </>
    );
}

export default Navigation;