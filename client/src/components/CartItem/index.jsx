import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    }

    else {
       dispatch({
         type: UPDATE_CART_QUANTITY,
         _id: item._id,
         purchaseQuantity: parseInt(value),
       });
       idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
     }
  };

  return (
    <div className="flex-row cart-item">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.title}, ${item.price}
        

          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            className="car-trash-icon"
          >
          🗑️
          </span>
          </div>
      </div>
    </div>
  );
};

export default CartItem;
