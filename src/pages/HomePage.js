
import Product from "../components/Product";
import CartIcon from '../components/CartIcon';

export default function HomePage({ isFetching, error, products, cartCount, addToCart }) {

  if (isFetching) {
    return (<>Loading...</>);
  }

  return (
    <div>
      <CartIcon count={cartCount} />
      {products.map(product => (
        <Product key={product.name} addToCart={addToCart} {...product} />
      ))}
    </div>
  )
}
