//http://localhost:3000/signup


import React from "react";

//I think Signup needs to be capitalized otherwise it won't compile
const Signup = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };



                      //TESTING
/////////////////////////////////////////////////////////////////////
const [user, setUser] = React.useState([]);
//Empty User
const emptyUser = {
  username: "",
  password: "",
  zipCode: 0
};

/////////////////////////////////////////////////////////////////////





  return (
    <>
     <header className="navbar">
      <nav>
        <span><a href="/">Home</a></span>
        {/* BC: Does not need auth */}

        <span><a href="/userHomePage">Log In</a></span>

        <span><a href="/signup">Sign Up</a></span>
        
        <span><a href="/auth/logout">Log Out</a></span>
        {/* BC: Homepage: Does not need auth */}
        <span><a href="/userHomePage">Add Event</a></span>
        <span><a href="/userHomePage">Find Local Projects</a></span>
      </nav>
    </header>
    <form className="newUser" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value= "Create Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="zipCode"
        value= "Enter your zip code"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value="Create Password"
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
     <footer>
     Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
    </footer>
    </>
  );
};

export default Signup;