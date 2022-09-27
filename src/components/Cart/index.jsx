import "./style.css";

function Cart({
  currentSale,
  removeItem,
  cartTotal,
  setCartTotal,
  setCurrentSale,
}) {
  const valor = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.price;
  }, 0);
  setCartTotal(valor);

  return (
    <div id="all">
      <div id="cartTitle">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length === 0 ? (
        <div id="empty">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>
      ) : (
        <div id="full">
          <ul id="cartItens">
            {currentSale.map((product) => (
              <li className="comprados">
                <img src={product.img} className="carPhoto" />
                <div className="carText">
                  <h4>{product.name}</h4>
                  <span>{product.category}</span>
                </div>
                <span className="remove" onClick={() => removeItem(product)}>
                  Remover
                </span>
              </li>
            ))}
          </ul>
          <div id="totalItens">
            <div id="textTotal">
              <p>Total</p>
              <span>
                {new Intl.NumberFormat([], {
                  style: "currency",
                  currency: "BRL",
                }).format(cartTotal)}
              </span>
            </div>
            <button
              id="removeAll"
              onClick={() => {
                setCurrentSale([]);
              }}
            >
              Remover Todos
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
