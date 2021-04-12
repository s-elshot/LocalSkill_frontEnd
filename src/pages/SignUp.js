import React, {Fragment} from 'react';
import SignUpCustomer from "./SignUpCustomer";
import SignUpGuilder from "./SignUpGuilder";


function SignUp() {

    return (
        <Fragment>
            <h2>Sign up</h2>
            <SignUpCustomer/>
            <SignUpGuilder/>
        </Fragment>
    );
}

export default SignUp;