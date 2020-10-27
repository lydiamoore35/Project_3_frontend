import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.outreach);

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
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
