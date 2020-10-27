import React from "react";

const Display = (props) => {
  const {outreach} = props
  const loaded = () => (
  <div style={{textAlign:"center"}}>
    {outreach.map((outreach)=> (
      <article>
        <h2>Event: {outreach.title}</h2>
        <h4>Cause: {outreach.cause}</h4>
        <h4>Where: {outreach.location}</h4>
        <h4> Start Date: {outreach.startDate}</h4>
        <h4>End Date: {outreach.endDate}</h4>
        </article>
    ))}
  </div>
  )
  const loading = <h1>Loading...</h1>
  //display loaded if there are dogs, show loading if there isn't
  return outreach.length > 0 ? loaded() : loading;
};
export default Display;
