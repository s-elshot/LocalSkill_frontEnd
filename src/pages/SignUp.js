import React, {Fragment} from 'react';
import SignUpCustomer from "./SignUpCustomer";
import SignUpGuilder from "./SignUpGuilder";
import SignUpFormCustomer from "../components/forms/SignUpForm";
import SignUpAdmin from "./SignUpAdmin";
// import signUpBackGround from "../assets/desktop/pexels-photo-4792521.jpeg";


function SignUp() {

    return (
        <Fragment>
            <SignUpCustomer/>
            <SignUpAdmin/>
            <SignUpGuilder/>
            <SignUpFormCustomer/>
        </Fragment>
    );
}

export default SignUp;