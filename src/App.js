import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    } from 'react-router-dom';
import React from "react";
import Entrance from "./pages/Entrance";
import GuilderShop from "./pages/GuilderShop";
import Overview from "./pages/OverView";
import ShoppingCart from "./pages/ShoppingCart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import GuildOverview from "./pages/GuildOverview";
import SignUpCustomer from "./pages/SignUpCustomer";
import SignUpGuilder from "./pages/SignUpGuilder";
// import LogInButton from "./components/LoginButton";
import UserStateContextProvider from "./context/UserStateContext";

function App() {

    const data = {
        count:0,
    }
return(
    <UserStateContextProvider value={data}>
     <Router>
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
            <Route exact path={"/guilderShop"}>
                <GuilderShop/>
            </Route>

            <Route path={"/guildOverview"}>
                <GuildOverview/>
            </Route>

            <Route exact path={"/shoppingCart"}>
                <ShoppingCart/>
            </Route>

            {/* Sign-up items*/}
            <Route exact path={"/singUp"}>
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

            {/*<Route exact path={"/logInButton"}>*/}
            {/*    <LogInButton/>*/}
            {/*</Route>*/}

        </Switch>
    </Router>
    </UserStateContextProvider>
)
}

export default App;
