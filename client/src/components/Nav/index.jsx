import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex-container">
          <div id="nav-link">
            <Link to="/profile">Purchase History</Link>
          </div>
          <div id="nav-link">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex-container">
          <div id="nav-link">
            <Link to="/signup">Signup</Link>
          </div>
          <div id="nav-link">
            <Link to="/login">Login</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <header>
      <div>
        <h1 className="Title">
          <Link to="/">
            <span role="img" aria-label="VinylLogo">
              💿
            </span>
            VinylAddict
          </Link>
        </h1>
      </div>
      <div>{showNavigation()}</div>
    </header>
  );
}

export default Nav;
