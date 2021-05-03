
import { Link } from "react-router-dom";
import { ReactComponent as BasketLogo } from '../shopping-basket-solid.svg';

export default function CartIcon({ count }) {

  return (
    <Link to='/cart'>
      <div className="relative p-2 m-6">
        <div className="box-border rounded-xl m-0 h-16 w-16 p-4 border-4 text-gray-500 
                        border-gray-500 hover:text-blue-400 hover:border-blue-400">
          <BasketLogo />
          {(count > 0) ? <div className="absolute top-0 right-0 bg-red-400 text-white
                                        font-semibold rounded-full text-center pl-2 pr-2">{count}</div> : <></>}
        </div>
      </div>
    </Link>
  );
}
