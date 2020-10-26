import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1>project 3</h1>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} />} />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" variableName={{}} handleSubmit={() => {}} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" variableName={{}} handleSubmit={() => {}} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
