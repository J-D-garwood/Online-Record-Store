// Import necessary dependencies and components
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

// Define the Login component, allowing users to sign in
function Login(props) {
  // Define a state to manage the form input values
  const [formState, setFormState] = useState({ email: "", password: "" });

  // Use a GraphQL mutation to handle user login
  const [login, { error }] = useMutation(LOGIN);

  // Function to handle form submission when signing in
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the login mutation with the provided email and password
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      // Extract the authentication token from the mutation response and log in the user
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  // Function to update the form state as users type in their email and password
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Render the Login component
  return (
    <div className="background-div">
      <div className="signin">
        <form onSubmit={handleFormSubmit}>
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

          {/* Display an error message if login fails */}
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}

          <button type="submit">Sign in</button>
          <h4>
            <span className="signin__gray">New to Vynil Addict? </span>
            <span className="signin__link">
              <Link to="/signup">Sign up now</Link>
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

// Export the Login component for use in other parts of the application
export default Login;
