import React from "react";
import logo from "../src/img/logo.png";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Setting</a>
        </div>

        <div>Messages</div>
      </nav>
      <div className="content">
        Main Content
        <div>
          <img
            src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="splash-screen"
          />
        </div>
        <div>
          {" "}
          Ava + description
          <img src="" alt="" />
        </div>
        <div>My post</div>
        <div>
          New Post
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
