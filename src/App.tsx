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
import { ActionsTypes, StoreType } from "./Redux/Store";

type PropsType = {
  store: StoreType;
  dispatch: (action: ActionsTypes) => void;
};

const App: React.FC<PropsType> = (props) => {
  const state = props.store.getState();

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
                // posts={state.profilePage.posts}
                // addPostCallBack={props.store.addPost.bind(props.store)}
                // dispatch={props.store.dispatch.bind(props.store)}
                  // messageForNewPost={state.profilePage.messageForNewPost}
                // updateNewPostText={props.store.updateNewPostText.bind(
                //   props.store
                // )}
              />
            )}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                dialogs={props.store._state.dialogsPage.dialogs}
                messages={props.store._state.dialogsPage.messages}
                messageForNewMessage={
                  props.store._state.dialogsPage.messageForNewMessage
                }
                dispatch={props.dispatch.bind(props.store)}
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
