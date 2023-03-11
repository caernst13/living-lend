import react from 'react'
import CategoryMenu from '../components/CategoryMenu'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
export default function Products() {
    return (
    <div>
            <h1>Products Page</h1>
            <CategoryMenu></CategoryMenu>
            <ProductList></ProductList>
            <Cart />
    </div>
    )

}