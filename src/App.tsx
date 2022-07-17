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
import { StoreType } from "./redux/State";

type PropsType = {
  store: StoreType;
};

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                posts={state.profilePage.posts}
                addPostCallBack={props.store.addPost.bind(props.store)}
                messageForNewPost={state.profilePage.messageForNewPost}
                updateNewPostText={props.store.updateNewPostText.bind(
                  props.store
                )}
              />
            )}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                dialogs={props.store._state.dialogsPage.dialogs}
                messages={props.store._state.dialogsPage.messages}
              />
            )}
          />
          <Route path={"/news"} render={() => <News />} />
          <Route path={"/music"} render={() => <Music />} />
          <Route path={"/setting"} render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
