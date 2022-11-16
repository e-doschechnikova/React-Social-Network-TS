import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Music} from "./components/Music/Music";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile/:userId?"} render={() => (<ProfileContainer/>)}/>
                    <Route path={"/users"} render={() => (<UsersContainer/>)}/>
                    <Route path={"/dialogs"} render={() => (<DialogsContainer/>)}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/setting"} render={() => <Setting/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;
