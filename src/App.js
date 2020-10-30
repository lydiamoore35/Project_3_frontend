import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import AuthForm from "./auth/authEventForm";
import UserHomePage from "./auth/userHomePage"
import Signup from "./userSignup"
import Login from "./userLogin"


export const GlobalContext = React.createContext(null)

function App() {

  //BC: THIS GLOBAL CONTEXT IS COMING FROM ALEX VIDEO:
  //https://www.youtube.com/watch?v=Jzdm4kOrZ0c&list=PLY6oTPmKnKbZsBHeBGNL9suAPIJdLaVk9&index=8
  const [globalState, setGlobalState] = React.useState({
    url: "https://outreach-zen.herokuapp.com", 
    token: null
  })

  // Variable to hold url
  const url = "https://outreach-zen.herokuapp.com";

  
  const [outreach, setOutreach] = React.useState([]);
  
  //State to Hold events
  //Empty events
  const emptyOutreach = {
    username: "-decode-token-to-get-user-and-set-",
    title: "",
    cause: "",
    location: "",
    zipCode: "",
    startDate:"",
    endDate: ""
  };

  // selected event state
  const [selectedOutreach, setSelectedOutreach] = React.useState(emptyOutreach)

  // function to get events via API
  const getOutreach = () => {
    fetch(url + "/")
      .then((response) => response.json())
      .then((data) => {
        setOutreach(data);
      });
  };      
// useEffect to do initial call of events
React.useEffect(() => {
  getOutreach();
}, []);

///////////
//Create
//////////
const handleCreate = (newEvent) => {
  fetch(url + "/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  }).then(response => {
    // don't need the response from the post but will be using the .then to update the list
    getOutreach();
  });
};

/////////////
//Edit
////////////
const handleUpdate = (editEvent) => {
  fetch(url + "/" + editEvent._id, {
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
  fetch(url + "/" + event._id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    getOutreach();
  });
};

  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
      <div className="App">
        <main>
          <Switch>
            {/* SITE LANDING PAGE */}
            <Route
              exact 
              path="/" 
              render={(rp) => <Home {...rp} outreach={outreach}  selectOutreach={selectOutreach} deleteOutreach={deleteOutreach}/>}/>

            {/* SIGNUP */}
            <Route
              exact
              path='/auth/signup'
              render={(rp) => (
                <Signup {...rp} />
              )}/>

            {/* LOGIN */}
            <Route
              exact
              path='/auth/login'
              render={(rp) => globalState.token ? <UserHomePage {...rp}  outreach={outreach} handleSubmit={handleCreate}  selectOutreach={selectOutreach} deleteOutreach={deleteOutreach} /> :<Login {...rp}/>
              }
            />

            {/* USER HOME PAGE */}
            <Route
              exact
              path="/userHomepage"
              render={(rp) =>
                <UserHomePage {...rp}  outreach={outreach} handleSubmit={handleCreate}  selectOutreach={selectOutreach} deleteOutreach={deleteOutreach} />
              }
            />

            {/* CREATE ROUTE */}
            <Route
              exact
              path="/create"
              render={(rp) => (
                <AuthForm {...rp} label="create" outreach={emptyOutreach} handleSubmit={handleCreate} />
              )}
            />

            {/* EDIT ROUTE */}
            <Route
              exact
              path="/edit"
              render={(rp) => (
                <AuthForm {...rp} label="update" outreach={selectedOutreach} handleSubmit={handleUpdate} />
              )}
            />       
          </Switch>
        </main>
      </div>
    </GlobalContext.Provider>
  );
}
 export default App;


