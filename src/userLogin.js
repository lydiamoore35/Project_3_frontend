//BC: This route doesn't need auth and should be moved out of auth folder

//BC: USER ALREADY HAS AN ACCOUNT, NOW SIGNING IN TO THEIR ACCOUNT

//http://localhost:3000/auth/login

/*
    -FORM FOR USER TO LOG IN
        -ONCE LOG IN IS SUCCESSFUL, REDIRECTS TO http://localhost:3000/auth/userHomepage
*/


//sign up page

import React from "react";

const Login = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.profile);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value= "Create Username"
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
  );
};

export default Login;