import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Cart from '../components/CartSide';
import { useStoreContext } from '../utils/GlobalState';

function OrderHistory() {
  const [, dispatch] = useStoreContext();
  const client = useApolloClient();
  const { loading, data } = useQuery(QUERY_USER, {
    onError: (error) => {
      console.log(error.message);
      if (error.message === 'Not logged in') {
        dispatch({ type: 'LOGOUT' });
      }
    },
  });

  const contextUser = client.cache.data.data?.ROOT_QUERY?.user;
  const user = data ? data.user : contextUser;


  return (
    <>
      <div className="container my-1">
        <Link to="/products">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price, description }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`${image}`} style={{ width: '100px', height: '100px' }}/>
                        <p>{name}</p>
                      </Link>
                        <p>{description}</p>
                      <div>
                        <span>${price} Per Month</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
        <Cart />
      </div>
    </>
  );
}

export default OrderHistory;
