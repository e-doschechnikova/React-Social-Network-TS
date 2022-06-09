import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import { Navbar } from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import { Profile } from "./components/Profile/Profile";
import { Setting } from "./components/Setting/Setting";
import { PostsPropsType } from "./index";

function App(props: PostsPropsType) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile"}
            render={() => <Profile posts={props.posts} />}
          />
          <Route path={"/dialogs"} render={() => <Dialogs />} />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/setting"} render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
