import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

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
    const token = data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signupPage">
      
        <img
          className="signupPage__logo"
          src="./images/vinyl-addict-logo.png"
          alt="logo"
        ></img>
        <Link to="/login">
          <button className="signupPage__button">Sign In</button>
        </Link>
        <div className="signupPage__gradient" />
      
      <div className="signupPage__body">
        <>
          <h1> Welcome to VinylAddict - Your Ultimate Vinyl Marketplace!</h1>
          <h2>Discover, Buy, and Sell Your Favorite Vinyl Records</h2>
          <h3>
          Join VinylAddict now and experience the joy of vinyl in a whole new way
          </h3>
          <div className="signupPage__input">
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
              <input
                placeholder="Last Name"
                name="lastName"
                type="lastName"
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
              <button className="signupPage__input__button">SIGN UP</button>
            </form>
          </div>
        </>
      </div>
    </div>

    // <div className="container my-1">
    //   <Link to="/login">← Go to Login</Link>

    //   <h2>Signup</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         placeholder="First"
    //         name="firstName"
    //         type="firstName"
    //         id="firstName"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         placeholder="Last"
    //         name="lastName"
    //         type="lastName"
    //         id="lastName"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Signup;
