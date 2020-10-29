
// //BC: USER HAS ALREADY SIGNED UP AND LOGGED IN. THIS PAGE WILL HAVE THE ADD/EDIT EVENT BUTTONS, SHOW THEIR EVENTS AND OTHER BY USER ZIPCODE (IF MULITPLE USERS HAVE THE SAME ZIPCODE THEY WILL SEE EACH OTHER'S EVENTS)

// //http://localhost:3000/auth/userHomepage

// /*
//     -BUTTONS TO ADD/CRUD EVENTS
//     -DISPLAY FIELD FOR ALL EVENTS WITH THEIR ZIPCODE

// */



import React from "react";

const UserHomePage = (props) => {

  const {outreach} = props

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
