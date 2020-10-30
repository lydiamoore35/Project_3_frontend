//CURRENTLY LOGIN DOES NOT RECOGNIZE THE USER OR THE TOKEN, BUT IT DOES SEND TO THE CORRECT HOME PAGE
import React from "react";
import {GlobalContext} from "./App"

const Login = (props) => {

  const {globalState, setGlobalState} = React.useContext(GlobalContext)
  const {url} = globalState


  const blankForm = {
    username: "",
    password: "",
  }

  const [form, setForm] = React.useState(blankForm);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

//Even with wrong password this sends user to userHomepage
  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = form
    
  
    fetch(`${url}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setGlobalState({...globalState, token: data.token})
      console.log(`Token: ${data.token}`)
      setForm(blankForm)
    })
  };



  return (
    <>
      <header className="navbar">
        <nav>
          <span><a href="/">Home</a></span>
          <span><a href="/auth/signup">Sign Up</a></span>
          <span><a href="/">Log Out</a></span>
          <span><a href="/userHomePage">Add Event</a></span>
          <span><a href="/userHomePage">Find Local Projects</a></span>
        </nav>
      </header>

      <form onSubmit={handleSubmit}>
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

        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default Login;