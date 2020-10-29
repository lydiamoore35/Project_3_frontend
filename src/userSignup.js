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

      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value= {form.zipCode}
        onChange={handleChange}
      />

      <input type="submit" value="signup" />
    </form>
  );
};

export default Signup;