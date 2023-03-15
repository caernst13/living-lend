import React, { useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import {Tooltip} from 'react-tooltip';

export default function AdminProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  function handleDelete(productId) {
    // Remove the product from the state
    const updatedProducts = state.products.filter((product) => product._id !== productId);
    dispatch({
      type: UPDATE_PRODUCTS,
      products: updatedProducts,
    });

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        console.log(products);
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <>
      <MDBContainer className="my-3 border p-2">
        <div className="d-flex justify-content-between">
        <h2>Product List</h2>
        <MDBBtn rounded size='sm' color="success">
                    Add Product
                  </MDBBtn>
        </div>
      <MDBTable hover small align='top'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Status</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {state.products.length ? (
            filterProducts().map((product) => (
              <tr key={product._id}>
                <td className = "pr-0 mr-0">
                  <div className='d-flex align-items-center'>
                    <img
                      src={product.image}
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{product.name}</p>
                      <p className='text-muted mb-0'>ID: {product._id}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>In Stock: {product.quantity}</p>
                  <p
                    className='text-muted mb-0'
                  
                  >
                    {product.description.slice(0, 30)}...
                  </p>
                  
                </td>
                <td>
                  <MDBBadge color='success' pill>
                    Active
                  </MDBBadge>
                </td>
                <td>${product.price}</td>
                <td>
                  <MDBBtn color='warning' rounded size='sm'>
                  <MDBIcon fas icon="pencil-alt" />
                  </MDBBtn>
                  <MDBBtn color='danger' rounded size='sm' onClick={() => handleDelete(product._id)}>
                  <MDBIcon far icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>
                <h3>You haven't added any products yet!</h3>
              </td>
            </tr>
          )}
        </MDBTableBody>
        </MDBTable>
        </MDBContainer>
      </>
      );
}