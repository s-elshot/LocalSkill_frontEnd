import React, {Fragment} from 'react';
// import enterScreen from "./../assets/backgrounds/Enter Screen.png";
import "./Entrance.css"


function Entrance() {

    return (
        <>
            <h2 className="enterText">LOCAL SKILL</h2>
            {/*<img className="enterBackground" src={enterScreen} alt="enter"/>*/}
            <div className="enterBanner">LOCAL SKILL - bringing the hood together</div>
            <span className="enterButtonContainer">
                <div className="enterButtonLink">LOG IN GUILDER</div>
                <div className="enterButtonLink">LOG IN CLIENT</div>
                <div className="enterButtonLink">LOG IN ClIENT</div>
            </span>
        </>
    );
}

export default Entrance;