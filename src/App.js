import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import UserEventForm from "./auth/userEventForm";
import Form from "./Form"
import Login from "./userLogin";
import Signup from "./userSignup";
import UserHomePage from "../src/auth/userHomePage"


function App() {
  // Variable to hold url /////BC: Master file has 4500
  const url = "http://localhost:3000";
  //State to Hold events
  const [outreach, setOutreach] = React.useState([]);
  //Empty Outreach Event
  const emptyOutreach = {
    title: "",
    cause: "",
    location: "",
    startDate:"",
    endDate: ""
  };

  const [selectedOutreach, setSelectedOutreach] = React.useState(emptyOutreach)
  const getOutreach = () => {
    fetch(url + "/outreach/")
      .then((response) => response.json())
      .then((data) => {
        setOutreach(data);
      });
  };      
// useEffect to do initial call of events
React.useEffect(() => {
  getOutreach();
}, []);

const handleCreate = (newEvent) => {
  fetch(url + "/outreach/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list
    getOutreach();
  });
};

//Edit route
const handleUpdate = (editEvent) => {
  fetch(url + "/outreach/" + editEvent._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editEvent),
  }).then(() => {
    getOutreach();
  });
};
const selectOutreach = (event) => {
  setSelectedOutreach(event);
};

//Delete
const deleteOutreach = (event) => {
  fetch(url + "/outreach/" + event._id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    getOutreach();
  });
};




  return (
    <div className="App">
    
      <Link to="/create"><button>Add Event</button></Link>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <main>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(rp) => <Home {...rp} outreach={outreach} selectOutreach={selectOutreach} deleteOutreach={deleteOutreach} />} />

          <Route
            exact
            path='/signup'
            render={(rp) => (
              <Signup {...rp} label="signup"/>
            )}/>

            <Route
            exact
            path='/login'
            render={(rp) => (
              <Login {...rp} label="login"  />
            )}/>

            <Route
            exact
            path='/auth/userHomepage'
            render={(rp) => (
              <UserHomePage {...rp} label="userHomepage" />
            )}/>

            <Route
              exact
              path="/auth/eventForm"
              render={(rp) => (
                <UserEventForm {...rp} label="userEventForm" />
              )} />
        </Switch>
      </main>
    </div>
  );
}
 export default App;


