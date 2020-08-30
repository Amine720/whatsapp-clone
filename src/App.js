import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Route path="/rooms/:roomId" component={Chat} />
            <Route exact path="/" render={() => <h1>Home</h1>} />
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
