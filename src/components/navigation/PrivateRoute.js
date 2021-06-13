import {Redirect, Route} from "react-router-dom";

function PrivateRoute({children, signedIn, toggleSignedIn, ...rest}) {


    return (
        <Route {...rest}>
            {signedIn ? children : <Redirect to="http://localhost:3000/"/>}
            </Route>
                )
            }

export default PrivateRoute