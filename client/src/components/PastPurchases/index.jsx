import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function PastPurchases() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

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
              {user.orders.map((order) => (
                <div>
                  <h3>
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </h3>
                  <div className="purchase-history-container">
                    {order.vinyls.map((vinyl, index) => {
                      let vinyl_page_ref = "/vinyls/" + vinyl._id;
                      let image_ref = `/images/${vinyl.image}`;
                      return (
                        <div className="container-vinyl-item" key={index}>
                          <a key={index} href={vinyl_page_ref}>
                            <img id="carosel_img" src={image_ref}></img>
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

export default PastPurchases;
