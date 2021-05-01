
import { Link } from "react-router-dom";

export default function CartIcon({ count }) {

  return (
    <div>
      <Link to='/cart'>Корзина</Link>: {count}
    </div>
  );
}
