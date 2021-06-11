import './App.css';
import {
    Route,
    Switch,
} from 'react-router-dom';
import React from "react";
import Entrance from "./pages/entrance/Entrance";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/logIn/Login";
// import WebNavigation from "./components/navigation/WebNavigation";
import Overview from "./pages/overview/Overview";
import UserContextProvider from "./context/UserContext";
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





function App() {

    const data = {}


    return (

            <UserContextProvider value={data}>

                <nav>
                    <MobileNavigation/>
                </nav>
                {/*<nav>*/}
                {/*    <WebNavigation/>*/}
                {/*</nav>*/}

                <Switch>

                     basic functionality path

                    <Route exact path={"/"}>
                        <Entrance/>
                    </Route>

                    <Route exact path={"/homePage"}>
                        <Home/>
                    </Route>

                    <Route exact path={"/logIn"}>
                        <Login/>
                    </Route>

                    {/* Profile pages*/}

                    <Route exact path={"/profile"}>
                        <Profile/>
                    </Route>

                    <Route exact path={"/profile/orders"}>
                        <OrdersInPossesion/>
                    </Route>

                    <Route exact path={"/profile/createItem"}>
                        <CreateItemForm/>
                    </Route>

                    <Route exact path={"/profile/itemsInPossession"}>
                        <ItemsInPossesion/>
                    </Route>

                    <Route exact path={"/profile/userDetails"}>
                        <UserDetails/>
                    </Route>

                    <Route exact path={"/profile/deleteAccount"}>
                        <DeleteAccount/>
                    </Route>

                    {/* Shopping pages*/}
                    <Route path={"/overview"}>
                        <Overview/>
                    </Route>

                    <Route exact path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </Route>

                    {/* Sign-up items*/}
                    <Route exact path={"/signUp"}>
                        <SignUp/>
                    </Route>

                    <Route path={"/orders"}>
                        <Orders/>
                    </Route>

                    <Route path="/item/:id" exact>
                        <ItemPost/>
                    </Route>


                </Switch>

                {/*<nav>*/}
                {/*    <MobileNavigation/>*/}
                {/*</nav>*/}


            </UserContextProvider>


    )
}

export default App;
