import React, {createContext, useState} from 'react'
import {Redirect} from "react-router-dom";

export const UserStateContext = createContext({});


function UserStateContextProvider({children}) {

    const [signedIn, toggleSignedIn] = useState(false)

        function signIn() {
            if (!signedIn) {
                return <Redirect to={"/"}/>
            }
        }

        function changeState() {
            toggleSignedIn(!signedIn)
        }

    const data = {
        currentLogIn: signedIn,
        signedIn: signedIn,
        signIn:signIn,
        changeState: changeState,
        toggleSignedIn: toggleSignedIn
    }

    return (
        <UserStateContext.Provider value={data}>
            {children}
        </UserStateContext.Provider>
    );
}


export default UserStateContextProvider;