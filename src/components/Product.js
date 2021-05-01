
export default function Product({ name, price, image, addToCart }) {

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '75px 100px' }}>
      <img src={image} alt="" width="75" height="75" />
      <div style={{ justifySelf: "right", width: '80%' }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        ${price}
        <button onClick={() => addToCart(name)}>Добавить</button>
      </div>
    </div>
  );
}