import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    } from 'react-router-dom';
import React from "react";
import Entrance from "./pages/Entrance";
import GuilderShop from "./pages/GuilderShop";
import LoginGuilder from "./pages/LoginGuilder";
import Overview from "./pages/OverView";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Navigation from "./pages/Navigation";

function App() {
return(
    <Router>
        <nav>
            <Navigation/>
        </nav>

        <Switch>
            <Route exact path={"/"}>
                <Entrance/>
            </Route>

            <Route path={"/overview"}>
                <Overview/>
            </Route>

            <Route exact path={"/loginguilder"}>
                <LoginGuilder/>
            </Route>

            <Route path={"/guilderShop"}>
                <GuilderShop/>
            </Route>

            <Route exact path={"/shoppingCart"}>
                <ShoppingCart/>
            </Route>

            <Route exact path={"/signUp"}>
                <SignUp/>
            </Route>

        </Switch>
    </Router>
)
}

export default App;
