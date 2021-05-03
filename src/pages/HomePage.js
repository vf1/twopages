
import Product from "../components/Product";
import CartIcon from '../components/CartIcon';

export default function HomePage({ isFetching, error, products, cartCount, addToCart }) {

  if (isFetching) {
    return (<>Loading...</>);
  }

  return (
    <div className="container mx-auto">
      <div className="grid justify-end">
        <CartIcon count={cartCount} />
      </div>
      <div className="flex flex-row flex-wrap">
        {products.map(product => (
          <div key={product.name} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <Product addToCart={addToCart} {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}
