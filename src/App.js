import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Navbar from "./app/Navbar";
import Post from "./features/posts/Post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                  <span>Learn </span>
                  <a
                    className="App-link"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                  <span>, </span>
                  <a
                    className="App-link"
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux
                  </a>
                  <span>, </span>
                  <a
                    className="App-link"
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux Toolkit
                  </a>
                  ,<span> and </span>
                  <a
                    className="App-link"
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Redux
                  </a>
                </span>
              </header>
            )}
          />
          <Route path="/posts" component={Post} />
          <Route path="/404" render={() => "Not found"} />
          <Redirect to="/404"  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
