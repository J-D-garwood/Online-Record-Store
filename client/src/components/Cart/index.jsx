// Import necessary dependencies and components
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

// Load the Stripe client library and provide your Stripe public key
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

// Define the Cart component, which displays the shopping cart
const Cart = () => {
  // Access the global state and dispatch function from the context
  const [state, dispatch] = useStoreContext();

  // Define a lazy query to get the checkout session data from the server
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // Redirect to Stripe checkout when checkout data is available
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // Load the cart from IndexedDB if it's not already in the state
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, vinyls: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // Function to toggle the visibility of the cart
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  // Calculate the total price of items in the cart
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price;
    });
    return sum.toFixed(2);
  }

  // Function to initiate the checkout process
  function submitCheckout() {
    getCheckout({
      variables: {
        vinyls: [...state.cart],
      },
      addTypename: false,
    });
  }

  // Render the Cart component
  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart 🛒</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between cart-total">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>Add a Vinyl to your Cart! 💽</h3>
      )}
    </div>
  );
};

// Export the Cart component for use in other parts of the application
export default Cart;
