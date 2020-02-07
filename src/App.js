import React from "react";
import "./styles.css";
import TodoList from "./TodoList";
import { Link, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/todos" component={TodoList} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Navigation />

        {/* <TodoList /> */}
      </React.Fragment>
    );
  }
}

const Profile = () => {
  return <div>profile</div>;
};

const Navigation = () => {
  return (
    <div>
      <Link to="/todos">Todo List</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
