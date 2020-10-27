import React from "react";

const profileForm = (props) => {
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
        type="Number"
        name="zipCode"
        value= "Enter your zipcode"
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

export default profileForm;
