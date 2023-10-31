// Import necessary dependencies and components
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

// Define the Signup component, allowing users to create a new account
function Signup(props) {
  // Define a state to manage the form input values
  const [formState, setFormState] = useState({ email: "", password: "" });

  // Use a GraphQL mutation to handle user registration
  const [addUser] = useMutation(ADD_USER);

  // Function to handle form submission when signing up
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });

    // Extract the authentication token from the mutation response and log in the user
    const token = data.addUser.token;
    Auth.login(token);
  };

  // Function to update the form state as users input their first name, last name, email, and password
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Render the Signup component
  return (
    <div className="background-div">
      <div className="signin">
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            type="text" // corrected "type" attribute
            id="firstName"
            onChange={handleChange}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            type="text" // corrected "type" attribute
            id="lastName"
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />

          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

// Export the Signup component for use in other parts of the application
export default Signup;
