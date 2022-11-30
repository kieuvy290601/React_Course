import axios from "axios";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";
import GithubState from "./context/github/githubState";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState({});

  const searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsersData(response.data.items);
  };

  const clearUsers = () => {
    setUsersData([]);
    setUser({});
  };

  const getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    setUser(response.data);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Fragment>
                  <Search clearUsers={clearUsers} searchUsers={searchUsers} />
                  <Users usersData={usersData} />
                </Fragment>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/user/:loginId">
                <User getUser={getUser} user={user} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
