
//BC: this will essentially be the same as the app homepage but only shows the user's events
// import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import App from "../App";

const UserHomePage = (props) => {
  
    const {outreach} = props
console.log(`Handle Create: ${props.handleCreate}`)
console.log(`Handle Update: ${props.handleUpdate}`)
console.log(`Delete Outreach: ${props.deleteOutreach}`)
console.log(`Outreach: ${props.outreach}`)
console.log(`Get Outreach (): ${props.getOutreach}`)



  const loaded = () => (
    <div className="container">
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
  )

  const loading = <h1>Loading...</h1>

  return outreach.length > 0 ? loaded() : loading
};
export default UserHomePage;

