import React, { useEffect } from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

export default function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  

  const { categories } = state || {};

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };
  return (
    <>
      <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {}}
        items={[
          {
            title: 'Filters',
            itemId: '/filter',
            elemBefore: () => <i className="fa-solid fa-filter"></i>,
          },
          {
            title: 'Room',
            itemId: '/Room',
            elemBefore: () => <i className="fa-solid fa-house"></i>,
            subNav: [
              {
                title: 'LivingRoom',
                itemId: '/room/livingroom',
              },
              {
                title: 'Bedroom',
                itemId: '/room/bedroom',
              },
              {
                title: 'Dining',
                itemId: '/room/diningroom',
              },
            ],
          },
          {
            title: 'Category',
            itemId: '/category',
            elemBefore: () => <i className="fa-solid fa-couch"></i>,
            subNav: categories
              ? categories.map((category) => ({
                  title: category.name,
                  itemId: `/category/${category._id}`,
                  onClick: () => {
                    handleClick(category._id);
                  },
                }))
              : [],
          },
        ]}
      />
    </>
  );
}
