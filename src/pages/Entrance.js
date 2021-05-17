import React, {Fragment} from 'react';
// import enterScreen from "./../assets/backgrounds/Enter Screen.png";
import "./Entrance.css"
import {NavLink} from "react-router-dom";
// import home from "../assets/mobileIcons/Icon awesome-home@2x.png"
// import user from "../assets/mobileIcons/Icon material-account-circle@2x.png"
// import search from "../assets/mobileIcons/Icon awesome-search@2x.png"
// import shopping from "../assets/mobileIcons/Icon awesome-shopping-cart@2x.png"


function Entrance() {

    return (
        <>
            <h2 className="enterText">LOCAL SKILL</h2>
            {/*<img className="enterBackground" src={enterScreen} alt="enter"/>*/}
            <div className="enterBanner">LOCAL SKILL - bringing the hood together</div>
            <span className="enterButtonContainer">

                <NavLink to="/signUp" activeClassName="entranceLink">SIGN UP</NavLink>
                <NavLink to="/guildOverview" activeClassName="entranceLink">ENTER</NavLink>
                <NavLink to="/logIn" activeClassName="entranceLink">LOG IN</NavLink>
                 {/*   <div className="jordan">*/}
                 {/*       <img src={home} alt="enter"/>*/}
                 {/*       <img src={user} alt="enter"/>*/}
                 {/*       <img src={search} alt="enter"/>*/}
                 {/*       <img src={shopping} alt="enter"/>*/}
                 {/*</div>*/}
                {/*<div className="enterButtonLink">LOG IN GUILDER</div>*/}
                {/*<div className="enterButtonLink">ENTER VISITOR</div>*/}
                {/*<div className="enterButtonLink">LOG IN ClIENT</div>*/}
            </span>
        </>
    );
}

export default Entrance;