import React, {Fragment} from 'react';

import SignUpFormCustomer from "../../components/forms/SignUpForm";
import SignUpComponent from "./SignUpComponent";
// import styles from "./SignUp.module.css"
// import womenWithGlasses from "../../assets/mobileIcons/pexels-photo-5915140.png";



function SignUp() {

    return (
        <Fragment>
            {/*<img className={styles.signUpPicture} src={womenWithGlasses} alt="womenWithGlasses"/>*/}
            <SignUpComponent/>
            <SignUpFormCustomer/>
        </Fragment>
    );
}

export default SignUp;