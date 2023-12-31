import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const vinyls = cart.map((item) => item._id);

      if (vinyls.length) {
        const { data } = await addOrder({ variables: { vinyls } });
        const productData = data.addOrder.vinyls;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 5000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="successPage">
      <Jumbotron>
        <div className="successPage_title">
          <h1>Thank you for your purchase!</h1>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Success;
