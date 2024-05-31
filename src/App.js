import "./styles.css";
import axios from "axios";
import Details from "./details";
import { useState, useEffect } from "react";
export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const showDetails = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const closeDetails = () => {
    setShow(false);
  };

  return (
    <div className="App">
      {products.map((data, index) => {
        return (
          <div className="card" key={index}>
            <span>{data.title}</span>
            <button onClick={() => showDetails(data)}>Show</button>
            {show && selectedProduct.id === data.id && (
              <>
                {" "}
                <button onClick={closeDetails}>Close</button>
                <Details product={selectedProduct} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
