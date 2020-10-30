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


  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, password} = form
    
    //ERROR: Post lh:4500/auth/login 400 Not Found.Token undefined
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
      props.history.push("/userHomepage")
    })
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value= {form.username}
        onChange={handleChange}
      />

      <input
        type="text"
        name="password"
        placeholder="Password"
        value= {form.password}
        onChange={handleChange}
      />  

      <input type="submit" value="login" />
    </form>
  );
};

export default Login;