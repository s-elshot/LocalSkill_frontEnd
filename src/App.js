import './App.css';
import {
    Route,
    Switch,
} from 'react-router-dom';
import React from "react";
import Entrance from "./pages/Entrance";
import Overview from "./pages/OverView";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navigation from "./components/navigation/Navigation";
import GuildOverview from "./pages/GuildOverview";
import SignUpCustomer from "./pages/SignUpCustomer";
import SignUpGuilder from "./pages/SignUpGuilder";
import UserContextProvider from "./context/UserContext";
import CreateProduct from "./pages/CreateProduct";
import ProfilePage from "./pages/ProfilePage";
import Orders from "./pages/Orders";
import ItemPost from "./components/object/ItemPost";




function App() {

    const data = {}


    return (
        // <CartContextProvider value={data}>
            <UserContextProvider value={data}>
                <nav>
                    <Navigation/>
                </nav>

                <Switch>

                    {/* basic functionality path*/}
                    <Route exact path={"/"}>
                        <Entrance/>
                    </Route>


                    <Route path={"/overview"}>
                        <Overview/>
                    </Route>

                    <Route exact path={"/logIn"}>
                        <Login/>
                    </Route>

                    {/* Shopping pages*/}
                    <Route exact path={"/profilePage"}>
                        <ProfilePage/>
                    </Route>

                    <Route path={"/guildOverview"}>
                        <GuildOverview/>
                    </Route>

                    <Route exact path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </Route>

                    {/* Sign-up items*/}
                    <Route exact path={"/signUp"}>
                        <SignUp/>
                    </Route>

                    <Route exact path={"/signUpCustomer"}>
                        <SignUpCustomer/>
                    </Route>

                    <Route exact path={"/signUpGuilder"}>
                        <SignUpGuilder/>
                    </Route>

                    <Route path={"/shoppingCart"}>
                        <ShoppingCart/>
                    </Route>

                    <Route path={"/createProduct"}>
                        <CreateProduct/>
                    </Route>

                    <Route path={"/orders"}>
                        <Orders/>
                    </Route>

                    <Route path="/item/:id" exact>
                        <ItemPost/>
                    </Route>

                </Switch>
            </UserContextProvider>
        // </CartContextProvider>

    )
}

export default App;
