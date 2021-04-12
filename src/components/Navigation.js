import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'
import {UserStateContext} from "../context/UserStateContext";
import LogInButton from "./LoginButton";

function Navigation() {

    const {signedIn} = useContext(UserStateContext)

    return (
        <nav>
            <div className="navContainter">
                <h2>Navigation</h2>
                <ul className="navUl">

                    <li className="navBarUl">
                        <NavLink to="/"  activeClassName="active-link">Home page</NavLink>
                    </li>

                    {signedIn === false &&
                        <li className="navBarUl">
                            <NavLink to="/logIn" activeClassName="active-link">Log in</NavLink>
                        </li>
                    }

                    {signedIn === false &&
                        <li className="navBarUl">
                            <NavLink to="/singUp" activeClassName="active-link">Sign Up</NavLink>
                        </li>
                    }

                    {signedIn === true &&
                        <li className="navBarUl">
                            <NavLink to="/shoppingCart" activeClassName="active-link">Shopping Cart</NavLink>
                        </li>
                    }

                    <li className="navBarUl">
                        <NavLink to="/guildOverview"  activeClassName="active-link">Guild overview page</NavLink>
                    </li>

                    {signedIn === true &&
                        <li className="navBarUl">
                            <NavLink to="/guilderShop"  activeClassName="active-link">Guilders personal shop</NavLink>
                        </li>
                    }

                    {signedIn === true &&
                        <li className="navBarUl">
                            <NavLink to="/loginButton"  activeClassName="active-link"><LogInButton/></NavLink>
                        </li>
                    }

                </ul>
            </div>

        </nav>
    );
}

export default Navigation;