// Import necessary dependencies and components
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

// Define the PastPurchases component
function PastPurchases() {
  // Query the GraphQL server to get user data
  const { data } = useQuery(QUERY_USER);
  let user;

  // If data has been fetched, assign the user data to the 'user' variable
  if (data) {
    user = data.user;
  }

  // Render the PastPurchases component
  return (
    <>
      <div className="background-div">
        <div className="container my-1">
          <Link to="/">← Back to Homepage</Link>

          {user ? (
            <div className="PH_page">
              <h2>
                Order History for {user.firstName} {user.lastName}
              </h2>

              {/* Iterate through user's past orders */}
              {user.orders.map((order) => (
                <div>
                  <h3>
                    {/* Convert and display the purchase date in a readable format */}
                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                  </h3>
                  <div className="purchase-history-container">
                    {order.vinyls.map((vinyl, index) => {
                      // Create references to the vinyl page and vinyl image
                      let vinyl_page_ref = "/vinyls/" + vinyl._id;
                      let image_ref = `/images/${vinyl.image}`;

                      // Display each vinyl item in the order
                      return (
                        <div className="container-vinyl-item" key={index}>
                          <a key={index} href={vinyl_page_ref}>
                            <img id="carosel_img" src={image_ref} alt={vinyl.title}></img>
                          </a>
                          <h4>{vinyl.title}</h4>
                          <h5>{vinyl.price}</h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

// Export the PastPurchases component for use in other parts of the application
export default PastPurchases;
