
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
    <div style={{textAlign: "center"}}>
      {outreach.map((event) => (
        <article>
          <h1>Title: {event.title}</h1>
          <h2>Cause: {event.cause}</h2>
          <h2>Location: {event.location}</h2>
          <h2>Zip Code: {event.zipCode}</h2>
          <h2>Start Date: {event.startDate}</h2>
          <h2>End Date: {event.endDate}</h2>
          <button onClick={() => {
            props.selectOutreach(event)
            props.history.push('/edit')
          }}>Edit</button>
          <button onClick={() => {props.deleteOutreach(event)}}>Delete</button>
        </article>
      ))}
    </div>
  )

  const loading = <h1>Loading...</h1>

  return outreach.length > 0 ? loaded() : loading
};
export default UserHomePage;

