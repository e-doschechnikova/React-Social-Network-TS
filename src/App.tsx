import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Music} from "./components/Music/Music";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Profile} from "./components/Profile/Profile";
import {Setting} from "./components/Setting/Setting";
import {StoreType} from "./Redux/Store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType;

};

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile store={props.store}/>
                        )}
                    />
                    <Route
                        path={"/dialogs"}
                        render={() => (
                            <DialogsContainer store={props.store}/>
                        )}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/setting"} render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
