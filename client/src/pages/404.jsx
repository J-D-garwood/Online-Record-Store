import Jumbotron from "../components/Jumbotron";
import backgroundImage from "../images/404-error-page.jpg";

const NoMatch = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    // backgroundSize: 'cover', // Adjust the size as needed
    backgroundRepeat: 'no-repeat', // Adjust the repetition as needed
    backgroundPosition: 'center', // Adjust the position as needed
    backgroundColor: 'black',
    height: '100vh',
    
    };
  return (
    <div style={containerStyle}>
      <Jumbotron>

      </Jumbotron>
    </div>
  );
};

export default NoMatch;


        {/* <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1> */}