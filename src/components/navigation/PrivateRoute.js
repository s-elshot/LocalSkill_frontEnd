import {Redirect, Route} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext";

function PrivateRoute({children, toggleSignedIn, ...rest}) {

    const {signedIn} = useContext(UserContext)

    return (
        <Route {...rest}>
            <Route {...rest}>
                {signedIn ? children : <Redirect to="/homePage"/>}
            </Route>
        </Route>
    )
}

export default PrivateRoute