
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";

export default function CartPage({ products, totalPrice, removeFromCart, setCartItemCount, clearCart }) {
  return (
    <div className="container pl-4 pr-4 mx-auto w-full lg:w-1/2">
      <div className="pb-4 pt-4">
        <Link to='/' className="text-blue-600 font-bold hover:underline">На главную</Link>
      </div>
      <div>
        {products.map(product => (
          <CartItem key={product.name} removeFromCart={removeFromCart} setCartItemCount={setCartItemCount} {...product} />
        ))}
      </div>
      <div className="mb-4">
        <button onClick={() => clearCart()}
          className="py-1 px-2 font-semibold rounded bg-gray-400
                      hover:bg-red-400 text-white">Очистить</button>
        <div className="text-xl float-right">
          ${totalPrice}
        </div>
      </div>
    </div>
  )
}

