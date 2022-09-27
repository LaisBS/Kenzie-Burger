import Product from "../Product";
import "./style.css";

function ProductList({ products, handleClick }) {
  return (
    <ul id="containerCards">
      {products.map((product) => (
        <li key={product.id} className="products">
          {<Product product={product} handleClick={handleClick} />}
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
