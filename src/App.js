import './App.css';
import {
    Route,
    Switch,
} from 'react-router-dom';
import React, {useContext} from "react";
import Entrance from "./pages/entrance/Entrance";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/logIn/Login";
import Overview from "./pages/overview/Overview";
// import UserContextProvider, {UserContext} from "./context/UserContext";
import Orders from "./pages/orders/Orders";
import ItemPost from "./components/object/ItemPost";
import MobileNavigation from "./components/navigation/MobileNavigation";
import Home from "./pages/home/Home";
import Profile from "./pages/profilePage/Profile";
import UserDetails from "./pages/profilePage/userDetails/UserDetails";
import ItemsInPossesion from "./pages/profilePage/itemsInPossesion/ItemsInPossesion";
import OrdersInPossesion from "./pages/profilePage/orders/OrdersInPossesion";
import DeleteAccount from "./pages/profilePage/deleteAccount/DeleteAccount";
import CreateItemForm from "./pages/profilePage/itemsInPossesion/CreateItemForm";
import Favorites from "./pages/favorites/Favorites";
import PrivateRoute from "./components/navigation/PrivateRoute";
import NotFound from "./pages/notFound/NotFound";
import {UserContext} from "./context/UserContext";
import OverviewDynamic from "./pages/overview/OverviewDynamic";





function App() {

    // const data = {}

    const {signedIn} = useContext(UserContext)


    return (

            // <UserContextProvider value={data}>
                <>
                <nav>
                    <MobileNavigation/>
                </nav>

                <Switch>

                     {/*basic functionality path*/}

                    <Route exact path={"/"}>
                        <Entrance/>
                    </Route>

                    <Route exact path={"/homePage"}>
                        <Home/>
                    </Route>

                    <Route exact path={"/logIn"}>
                        <Login/>
                    </Route>

                    <Route exact path={"/signUp"}>
                        <SignUp/>
                    </Route>

                    <Route signedIn={signedIn} exact path={"/overview"}>
                        <Overview/>
                    </Route>

                    <Route signedIn={signedIn} path={"/overview/:itemType/:areaCode"}>
                        <OverviewDynamic/>
                    </Route>
                    {/* Profile pages*/}


                    <PrivateRoute signedIn={signedIn} exact path={"/profile"}>
                        {/*{ signedin ? <Component> : <Redirect to={"/"}}*/}
                        <Profile/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/profile/orders"}>
                        <OrdersInPossesion/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/profile/createItem"}>
                        <CreateItemForm/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/profile/itemsInPossession"}>
                        <ItemsInPossesion/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/profile/userDetails"}>
                        <UserDetails/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/profile/deleteAccount"}>
                        <DeleteAccount/>
                    </PrivateRoute>

                    {/* Shopping pages*/}

                    <PrivateRoute signedIn={signedIn} exact path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} exact path={"/favorites"}>
                        <Favorites/>
                    </PrivateRoute>

                    {/* Sign-up items*/}

                    <PrivateRoute signedIn={signedIn} path={"/orders"}>
                        <Orders/>
                    </PrivateRoute>

                    <PrivateRoute signedIn={signedIn} path="/item/:id" exact>
                        <ItemPost/>
                    </PrivateRoute>

                    <Route exact path={"*"}>
                        <NotFound/>
                    </Route>

                    <nav>
                        <MobileNavigation/>
                    </nav>

                </Switch>


            </>
            // {/*// </UserContextProvider>*/}


    )
}

export default App;
