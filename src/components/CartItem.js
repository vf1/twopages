
export default function CartItem({ name, price, image, count, removeFromCart, setCartItemCount }) {

  function onCountChange(e) {
    setCartItemCount(name, e.target.value);
  }

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '75px 300px 20px',
        gridTemplateRows: '20px 55px',
        margin: 10,
      }}>
        <img src={image} alt="" width="100%" height="100%" style={{ gridArea: '1 / 1 / 3 / 2' }} />
        <div style={{ textAlign: 'center' }}>{name}</div>
        <button onClick={() => removeFromCart(name)}>X</button>
        <div style={{ padding: 10 }}>
          ${price}
          <input value={count} onChange={onCountChange} type="number" style={{ width: 30, marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
}
