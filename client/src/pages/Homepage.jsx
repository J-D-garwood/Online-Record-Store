import Cart from "../components/Cart";
import GenreCarosel from "../components/GenreCarosel";

const Homepage = () => {
  const genres = ["Pop", "Rock", "Hip Hop", "Metal", "Country"];

  return (
    <div className="background-div">
      <div className="container">
        {}
        {}
        {genres.map((genre, index) => (
          <div key={index}>
            <GenreCarosel genre={genre} />
          </div>
        ))}
        <Cart />
      </div>
    </div>
  );
};

export default Homepage;
