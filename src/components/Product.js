
export default function Product({ name, price, image, addToCart }) {

  return (
    <div className="flex gap-4 justify-start rounded shadow p-4 bg-white">
      <img src={image} alt="" className="h-32 object-scale-down" />
      <div className="relative flex-grow">
        <div className="font-bold text-2xl">{name}</div>
        <div className="text-gray-500 font-semibold pl-4">${price}</div>
        <button
          onClick={() => addToCart(name)}
          className="py-1 px-2 font-semibold rounded bg-green-400
                      hover:bg-green-300 text-white absolute bottom-0 right-0">Добавить</button>
      </div>
    </div>
  );
}
