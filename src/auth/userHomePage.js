
//BC: this will essentially be the same as the app homepage but only shows the user's events
// import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import App from "../App";

const UserHomePage = (props) => {
  
    const {outreach} = props

  const loaded = () => (
    <>
    <div className="container">
          <header className="navbar">
      <nav>
        <span><a href="/">Home</a></span>
        {/* BC: Does not need auth */}

        <span><a href="/auth/login">Log In</a></span>

        <span><a href="/auth/signup">Sign Up</a></span>

        <span><a href="/">Log Out</a></span>
        {/* BC: Homepage: Does not need auth */}
        <span><a href="/auth/login">Add Event</a></span>

        <span><a href="/userHomePage">Find Local Projects</a></span>
      </nav>
    </header>
      {outreach.map((event) => (        
        <div className="card">
          <h2>Title: {event.title}</h2>
          <p>Cause: {event.cause}</p>
          <p>Location: {event.location}</p>
          <p>Zip Code: {event.zipCode}</p>
          <p>Start Date: {event.startDate}</p>
          <p>End Date: {event.endDate}</p>
          <button  onClick={() => {
            props.selectOutreach(event)
            props.history.push('/edit')
          }}>Edit</button> &nbsp;
          <button onClick={() => {props.deleteOutreach(event)}}>Delete</button>
        </div>
      ))}
    </div>
    <footer>
    Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
  </footer>
  </>
  )

  const loading = <h1>Loading...</h1>

  return outreach.length > 0 ? loaded() : loading
};
export default UserHomePage;

