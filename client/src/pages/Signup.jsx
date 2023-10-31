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

    <div className="background-div">
      <div className="signin">
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

          <button type="submit">SIGN UP</button>
         
        </form>
      </div>
    </div>

    // <div className="signupPage">
      
    //     <div className="signupPage__gradient" />
      
    //   <div className="signupPage__body">
    //     <>

    //       <div className="signupPage__input">
    //         <form onSubmit={handleFormSubmit}>
    //           <input
    //             placeholder="First Name"
    //             name="firstName"
    //             type="firstName"
    //             id="firstName"
    //             onChange={handleChange}
    //           />
    //           <input
    //             placeholder="Last Name"
    //             name="lastName"
    //             type="lastName"
    //             id="lastName"
    //             onChange={handleChange}
    //           />
    //           <input
    //             placeholder="Email"
    //             name="email"
    //             type="email"
    //             id="email"
    //             onChange={handleChange}
    //           />
    //           <input
    //             placeholder="Password"
    //             name="password"
    //             type="password"
    //             id="pwd"
    //             onChange={handleChange}
    //           />
    //           <button className="signupPage__input__button">SIGN UP</button>
    //         </form>
    //       </div>
    //     </>
    //   </div>
    // </div>

    
  );
}

export default Signup;
