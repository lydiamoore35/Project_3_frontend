import React from "react";
import {GlobalContext} from "./App"

const Signup = (props) => {

  const {globalState, setGlobalState} = React.useContext(GlobalContext)
  const {url} = globalState


  const blankForm = {
    username: "",
    password: "",
    zipCode: ""
  }

  const [form, setForm] = React.useState(blankForm);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, password, zipCode} = form
    
    fetch(`${url}/auth/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setForm(blankForm)
      props.history.push("/auth/login")
    })
  };



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
          placeholder="Username"
          value= {form.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value= {form.password}
          onChange={handleChange}
        />  

        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value= {form.zipCode}
          onChange={handleChange}
        />
        <input type="submit" value="signup" />
      </form>
      <footer>
      Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
      </footer>
    </>
  );
};

export default Signup;