import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div key={item._id} item={item} className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={`${item.image}`}
                          fluid
                          style={{ width: "100px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black" onClick={() => removeFromCart(item)}>
                      <MDBIcon fas icon="times" />
                      </a>
                        <MDBTypography tag="h5" className="text-primary">
                        {item.name}
                        </MDBTypography>


                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">${item.price}</p>

                          <div className="d-flex align-items-center">
                            <p className="quantity fw-bold text-black">Qty: { item.purchaseQuantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
  );
}

export default CartItem;
