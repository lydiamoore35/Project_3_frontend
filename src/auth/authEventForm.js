import React from "react";

const AuthEventForm = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.outreach);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/userHomepage"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
    <header className="navbar">
    <nav>
    <span><img src="https://i.imgur.com/SeNYDJ9.png"></img></span>
      <span><a href="/">Home</a></span>
      {/* BC: Does not need auth */}

      <span><a href="/userHomePage">Log In</a></span>

      <span><a href="/signup">Sign Up</a></span>
      
      <span><a href="/auth/logout">Log Out</a></span>
      {/* BC: Homepage: Does not need auth */}
      <span><a href="/userHomePage">Add Event</a></span>
      {/* <span><a href="/userHomePage">Find Local Projects</a></span> */}
    </nav>
  </header>
    
    <form onSubmit={handleSubmit}>
      <div className="eventForm">
      <label>Event title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Cause:</label>
      <input
        type="text"
        name="cause"
        value={formData.cause}
        onChange={handleChange}
      />
      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
       <label>Zipcode:</label>
      <input
        type="number"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
      />
      <label>Start Date:</label>
        <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <label>End Date:</label>
        <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
     />
     </div>
      <input type="submit" value={props.label} />
      <footer>
      Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
    </footer>
    </form>
    </>
  );
};


export default AuthEventForm;

