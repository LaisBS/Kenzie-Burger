import "./style.css";

function Product({ product, handleClick }) {
  return (
    <div className="itens">
      <div className="img">
        <img src={product.img} />
      </div>
      <div className="text">
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <p>
          {new Intl.NumberFormat([], {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
        <button onClick={() => handleClick(product.id, product)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default Product;
