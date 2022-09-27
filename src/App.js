import "./App.css";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [input, setInput] = useState("");
  const notify = () =>
    toast.error("Você só pode adicionar um item do mesmo tipo no carrinho");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  });

  function showProducts() {
    const newArr = products.filter((elem) => {
      let lower = elem.name.toLowerCase();
      let Lower = input.toLowerCase();
      return lower.includes(Lower);
    });
    setInput("");
    return setFilteredProducts(newArr);
  }

  function handleClick(productId) {
    const repetido = currentSale.some(notEqual);

    function notEqual(currentValue) {
      return currentValue.id === productId;
    }

    if (repetido === true) {
      return notify();
    } else {
      const novoProduct = products.find((elem) => {
        return elem.id === productId;
      });
      return setCurrentSale([...currentSale, novoProduct]);
    }
  }

  function removeItem(product) {
    const novaArr = currentSale.filter((elem) => {
      return elem !== product;
    });
    return setCurrentSale(novaArr);
  }

  return (
    <div className="App">
      <Toaster />
      <header>
        <div onClick={() => setFilteredProducts([])} id="title">
          <h1>Burguer</h1>
          <h2>Kenzie</h2>
        </div>
        <form onSubmit={(event) => showProducts(event.preventDefault())}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button type="submit">Pesquisar</button>
        </form>
      </header>

      <ProductList
        products={filteredProducts.length > 0 ? filteredProducts : products}
        handleClick={handleClick}
      />
      <Cart
        currentSale={currentSale}
        removeItem={removeItem}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        setCurrentSale={setCurrentSale}
      />
    </div>
  );
}

export default App;
