import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <div className="flex-container">
              <div id="nav-link">
                <Link to="/profile">
                  Purchase History
                </Link>
              </div>
              <div id="nav-link">
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </div>
            </div>
            /*
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/profile">
                  profile
                </Link>
              </li>
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start }
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>*/
          );
        } else {
          return (
            <div className="flex-container">
              <div id="nav-link">
                <Link to="/signup">
                  Signup
                </Link>
              </div>
              <div id="nav-link">
                <Link to="/login">
                  Login
                </Link>
              </div>
            </div>
          );
        }
      }
    
      return (
        <header>
          <div>
          <h1>
            <Link to="/">
              <span role="img" aria-label="VinylLogo">💿</span>
               VinylAddict
            </Link>
          </h1>
          </div>
          <div>
            {showNavigation()}
          </div>
        </header>
      );
    }
    
    export default Nav;