import React, {Fragment} from 'react';

import SignUpFormCustomer from "../../components/forms/SignUpForm";
import SignUpComponent from "./SignUpComponent";
import blackShoppingCart from "../../assets/mobileIcons/pexels-photo-5915140.png";



function SignUp() {

    return (
        <Fragment>
            <img className="signUpPicture" src={blackShoppingCart} alt="shopping cart"/>
            <SignUpComponent/>
            <SignUpFormCustomer/>
        </Fragment>
    );
}

export default SignUp;