import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  setTimeout(() => {
    window.location.assign("/");
  }, 5000);

  return (
    <div className="noMatch">
      <Jumbotron></Jumbotron>
    </div>
  );
};

export default NoMatch;
