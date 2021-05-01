
import CartItem from '../components/CartItem';
import { Link } from "react-router-dom";

export default function CartPage({ products, totalPrice, removeFromCart, setCartItemCount, clearCart }) {
  return (
    <div>
      <Link to='/'>На главную</Link>
      <div>
        <button onClick={() => clearCart()}>Очистить</button>
      </div>
      <div>
        {products.map(product => (
          <CartItem key={product.name} removeFromCart={removeFromCart} setCartItemCount={setCartItemCount} {...product} />
        ))}
      </div>
      <div>
        Всего: {totalPrice}
      </div>
    </div>
  )
}

