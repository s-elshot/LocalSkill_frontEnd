import React, {
    createContext
    , useEffect
    , useState
} from 'react'
import {useHistory} from "react-router-dom";
import jwt_decode from 'jwt-decode'
import axios from "axios";


//  CONTEXT
// 1. context maken met createContext
// 2.context provider-component bouwen met daarin:
// - het echte AuthContext.Provider component
// - geef eem data object mee in de provider
// - state
// 3. Wikkelen de provider om <App> heen in index.js
// 4. Test context door een component aan te melden met useContext

// AUTHENTICATIE

// 1. Bedenk welke data je in de context beschikbaar moet stellen en
// maak raamwerk voor alle informatie die in de context moet komen
// (login/logout state)
// 2. state maken voor gebruikersdata en lege functies
// 3. Plaats de state en functies in een data object en geef die mee via de value={} prop
// 4. Inlogfunctie: Proces inloggen (JWT token in local storage zetten
// en gebruikersdata opslaan in de context) in de provider regelen
//5. logOutfunctie: jwt ui local storage halen en context leeghalen
//6. Implementeren dat bij refresh wordt gecheckt of er nog een jwt token is
// en zo ja, gebruikersdata ophalen.

export const AuthContext = createContext({});

function AuthContextProvider({children}) {


    const history = useHistory();

    // state gebruikersdata
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    })

    async function fetchUserData(jwtToken) {

        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;
        localStorage.setItem("token", jwtToken)

        try {

            const result = await axios.get(`http://localhost:600/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            setAuthState({
                user: {
                    email: result.data.email,
                    // username: result.data.username,
                    id: result.data.id
                },
                status: 'done'
            });
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        // is er een token?
        const token = localStorage.getItem('token');
        //
        if (token !== null && authState.user === null) {
            // als er een token is en een user is, wordt de data opgehaald
            // de user wordt in de authState geplaatst
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            })
        }
        // eslint-disable-next-line
    }, [])

    // async function logIn(jwtToken) {
    //     // console.log("JWT token?",jwtToken)
    //     // JWT DECODER NODIG: NPM INSTALL JWT-DECODE --SAVE
    //     localStorage.setItem("token", jwtToken)
    //     // need jwt token to get user-id
    //     // put jwt token in local storage
    //     // gebruikersdata ophalen
    //     // data gebruiken om context te vullen
    //     // doorlinken naar profielpagina
    //     fetchUserData(jwtToken);
    //
    //     history.push("/profile");
    // }


    function logOut() {
        localStorage.setToken("jwtToken", null);
        history.push('/logIn');
    }

    const data = {
        ...authState,
        // logIn: logIn,
        logOut: logOut,

    }

    return (
        <AuthContext.Provider value={data}>
            {
                authState.status === "done"
                ?

                children
                : <p>Loading..</p>
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider