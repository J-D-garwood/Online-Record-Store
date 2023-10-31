import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, ADD_TO_CART, UPDATE_VINYLS } from "../utils/actions";
import { QUERY_ALL_VINYLS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentVinyl, setCurrentVinyl] = useState({});

  let image_ref = `/images/${currentVinyl.image}`;

  const { loading, data } = useQuery(QUERY_ALL_VINYLS);

  const { vinyls, cart } = state;

  useEffect(() => {
    if (vinyls.length) {
      setCurrentVinyl(vinyls.find((vinyl) => vinyl._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_VINYLS,
        vinyls: data.allVinyls,
      });

      data.allVinyls.forEach((vinyl) => {
        idbPromise("vinyls", "put", vinyl);
      });
    } else if (!loading) {
      idbPromise("vinyls", "get").then((indexedVinyls) => {
        dispatch({
          type: UPDATE_VINYLS,
          vinyls: indexedVinyls,
        });
      });
    }
  }, [vinyls, data, loading, dispatch, id]);
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      return;
    } else {
      dispatch({
        type: ADD_TO_CART,
        vinyl: { ...currentVinyl },
      });
      idbPromise("cart", "put", { ...currentVinyl });
    }
  };
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentVinyl._id,
    });
    idbPromise("cart", "delete", { ...currentVinyl });
  };
  return (
    <>
      {currentVinyl && cart ? (
        <div id="details-container">
          <h1>{currentVinyl.title}</h1>
          <img src={image_ref} id="details-image"></img>
          <h3>price: ${currentVinyl.price}</h3>
          <button onClick={addToCart} id="details-button">
            ADD TO CART
          </button>
          {cart.find((p) => p._id === currentVinyl._id) ? (
            <button
              disabled={!cart.find((p) => p._id === currentVinyl._id)}
              onClick={removeFromCart}
              id="details-button"
            >
              REMOVE FROM CART
            </button>
          ) : null}
          <p>{currentVinyl.description}</p>
          <h3>Tracklist</h3>
          <div>
            {currentVinyl.tracklist?.split("\n").map((line) => (
              <>
                <span>{line}</span>
                <br />
              </>
            ))}
          </div>
        </div>
      ) : null}
      <Cart />
    </>
  );
}

export default Detail;
