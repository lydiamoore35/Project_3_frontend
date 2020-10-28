//BC: this will essentially be the same as the app homepage but only shows the user's events
// import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
const UserHomePage = (props) => {
  const {outreach} = props
  const loaded = () => (
    <div style={{textAlign: "center"}}>
      {outreach.map((event) => (
        <article>
          <h1>{event.title}</h1>
          <h2>{event.cause}</h2>
          <h2>{event.location}</h2>
          <h2>{event.zipCode}</h2>
          <h2>{event.startDate}</h2>
          <h2>{event.endDate}</h2>
          <button onClick={() => {
            props.selectEvent(event)
            props.history.push('/edit')
          }}>Edit</button>
          <button onClick={() => {props.deletedEvent(event)}}>Delete</button>
        </article>
      ))}
    </div>
  )
  const loading = <h1>Loading...</h1>
  return outreach.length > 0 ? loaded() : loading
};
export default UserHomePage;