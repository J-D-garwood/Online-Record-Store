// Import necessary dependencies and components
import { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_VINYLS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

// Define the GenreCarosel component, which displays a carousel of vinyls of a specific genre
function GenreCarosel({ genre }) {
  // Access the global state and dispatch function from the context
  const [state, dispatch] = useStoreContext();

  // Define a custom function 'Object.filter' to filter an object's keys based on a predicate
  Object.filter = (obj, predicate) =>
    Object.keys(obj)
      .filter((key) => predicate(obj[key]))
      .reduce((res, key) => ((res[key] = obj[key]), res), {});

  // Query the GraphQL server to get data for all vinyls
  const { loading, data } = useQuery(QUERY_ALL_VINYLS);

  // When the data is available, filter the vinyls based on the selected genre and display them
  if (!loading) {
    let vinyls = data.allVinyls;
    const vinyls_filtered = vinyls.filter((vinyl) => vinyl.genre == genre);

    return (
      <div>
        <h1 id="genre-title">{genre}</h1>
        <div className="scroll-container">
          {vinyls_filtered.map((vinyl, index) => {
            // Create references to the vinyl page and vinyl image
            let vinyl_page_ref = "/vinyls/" + vinyl._id;
            let image_ref = `/images/${vinyl.image}`;

            // Display each vinyl item in the carousel
            return (
              <div className="container-vinyl-item" key={index}>
                <a key={index} href={vinyl_page_ref}>
                  <img id="carosel_img" src={image_ref} alt={vinyl.title}></img>
                </a>
                <h4>{vinyl.artist}</h4>
                <h4>{vinyl.title}</h4>
                <h5>{vinyl.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// Export the GenreCarosel component for use in other parts of the application
export default GenreCarosel;
