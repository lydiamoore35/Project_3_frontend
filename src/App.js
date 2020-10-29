import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import AuthForm from "./auth/authEventForm";
import UserHomePage from "./auth/userHomePage"
import Signup from "./userSignup"


function App() {

  const [outreach, setOutreach] = React.useState([]);
  // Variable to hold url
  const url = "http://localhost:4500";
  //State to Hold events
  //Empty events
  const emptyOutreach = {
    title: "",
    cause: "",
    location: "",
    startDate:"",
    endDate: ""
  };

  // slected event state
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

//function to create new Event
const handleCreate = (newEvent) => {
  fetch(url + "/", {
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
    <div className="App">
    
      <Link to="/create"><button>Add Event</button></Link>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <main>
        <Switch>

          <Route
            exact
            path='/signup'
            render={(rp) => (
              <Signup {...rp} label="signup"/>
            )}/>

            <Route
               exact 
               path="/" 

               render={(rp) => <Home {...rp} outreach={outreach}  selectOutreach={selectOutreach} deleteOutreach={deleteOutreach}/>}/>
               
        <Route
        exact
        path="/create"
        render={(rp) => (

         <AuthForm {...rp} label="create" outreach={{emptyOutreach}} handleSubmit={handleCreate} />
        )}
          />

      <Route
        exact
        path="/userHomepage"
        render={(rp) =>
         <UserHomePage {...rp}  outreach={outreach} handleSubmit={handleCreate} />
        }
          />  

           <Route

            exact
            path='/login'
            render={(rp) => (

              <AuthForm {...rp} label="update" outreach={selectedOutreach} handleSubmit={handleUpdate} />

            )}
          />
            <Route
            exact
            path='/auth/userHomepage'
            render={(rp) => (
              <UserHomePage {...rp} label="userHomepage" />
            )}/>

            {/* <Route
              exact
              path="/auth/eventForm"
              render={(rp) => (
                <UserEventForm {...rp} label="userEventForm" />
              )} /> */}

        </Switch>
      </main>
    </div>
  );
}
 export default App;


