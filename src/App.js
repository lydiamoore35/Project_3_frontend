import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
function App() {
  // Variable to hold url
  const url = "http://localhost:4500";
  //State to Hold events
  const [outreach, setOutreach] = React.useState([]);
  //Empty Dog
  const emptyOutreach = {
    title: "",
    casue: "",
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

//delete

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
    
      {/* <Link to="/create"><button>Add Event</button></Link> */}
      <main>
        <Switch>
          <Route 
               exact 
               path="/" 
             render={(rp) => <Home {...rp} outreach={outreach}  selectOutreach={selectOutreach} deleteOutreach={deleteOutreach}/>}/>
               
  
          {/* <Route
            exact
            path="/create"
            render={(rp) => (

              <Form {...rp} label="create" outreach={{emptyOutreach}} handleSubmit={handleCreate} />
            )}
          /> */}
          {/* <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" outreach={{selectedOutreach}} handleSubmit={handleUpdate} />

            )}
          />




            {/* BC: I need to make my auth display pages and put them in this Switch. Testing routes below */}

            {/* <Route exact path="/auth/signup" render={(rp) => ({<authForm {...rp} label="signup" handleSubmit={() => {}})}} */}

             {/* <Route exact path="/auth/login" render={(rp) => ({<authForm {...rp} label="login" handleSubmit={() => {}})}} */}

              {/* <Route exact path="/auth/userHomePage" render={(rp) => ({<userHomePage {...rp} label="userHomePage" handleSubmit={() => {}})}} */}

             {/* <Route exact path="/auth/eventForm" render={(rp) => ({<authEventForm {...rp} label="eventForm" handleSubmit={() => {}})}} */}
        </Switch>
      </main>
    </div>
  );
        }

export default App;
