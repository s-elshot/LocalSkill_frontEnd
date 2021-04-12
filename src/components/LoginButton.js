import React, { useContext} from 'react';
import {UserStateContext} from "../context/UserStateContext";

function LogInButton() {


    const {changeState,signedIn} = useContext(UserStateContext)

    return (
        <>
            <button
                type="submit"
                onClick={changeState}>
                {signedIn ? 'Uitloggen' : 'Inloggen'}
            </button>
        </>
    );
}

export default LogInButton;