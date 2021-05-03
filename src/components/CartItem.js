
export default function CartItem({ name, price, image, count, removeFromCart, setCartItemCount }) {

  function onCountChange(e) {
    setCartItemCount(name, e.target.value);
  }

  return (
    <div className="flex items-center gap-4 bg-white rounded shadow p-4 mb-4">
      <div className="w-12 h-12">
        <img src={image} alt="" />
      </div>
      <div className="flex-grow font-semibold text-xl">{name}</div>
      <div className="text-gray-500 text-sm">${price}</div>
      <div>
        <input value={count} onChange={onCountChange} type="number" className="w-12 border-2 text-sm focus:outline-none" />
      </div>
      <div className="text-xs text-gray-400 w-20">${(price * count).toFixed(2)}</div>
      <div><button onClick={() => removeFromCart(name)} className="w-8 h-8 focus:outline-none focus:ring-2">x</button></div>
    </div>
  );
}
