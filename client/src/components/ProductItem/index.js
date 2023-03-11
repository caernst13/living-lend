import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./ecommerce-category-product.css";

function ProductItem(item) {
  console.log(item
)
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    description,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <MDBContainer fluid>
     <MDBRow className="justify-content-center mb-3">
  <MDBCol md="12" xl="10">
    <MDBCard className="shadow-0 border rounded-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom hover-overlay"
            >
                    <MDBCardImage
                      src={`${image}`}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol md="6">
                  <h5>{name}</h5>
            <div className="d-flex flex-row">
              <div className="text-danger mb-1 me-2">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
              </div>
              
            </div>
            <div className="mt-1 mb-0 text-muted small">
              <span>100% cotton</span>
              <span className="text-primary"> • </span>
              <span>Light weight</span>
              <span classNAme="text-primary"> • </span>
              <span>
                Best finish
                <br />
              </span>
            </div>
            <div className="mb-2 text-muted small">
              <span>Unique design</span>
              <span className="text-primary"> • </span>
              <span>For men</span>
              <span className="text-primary"> • </span>
              <span>
                Casual
                <br />
              </span>
            </div>
            <p className="text-truncate mb-4 mb-md-0">{description}
            </p>
          </MDBCol>
          <MDBCol
            md="6"
            lg="3"
            className="border-sm-start-none border-start"
          >
            <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${price}</h4>
              <span className="text-danger">
                <s>$21.99</s>
              </span>
            </div>
                  <h6 className="text-success">{quantity} {pluralize("item", quantity)} in stock</h6>
            <div className="d-flex flex-column mt-4">
              <MDBBtn color="primary" size="sm">
                Details
              </MDBBtn>
              <MDBBtn outline color="primary" size="sm" className="mt-2">
                Add to wish list
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>

    </MDBContainer>
  );
}

export default ProductItem;
