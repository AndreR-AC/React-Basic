import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const url = `https://60082863309f8b0017ee571a.mockapi.io/car/${id}`;
  const [product, setProduct] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    return (
      <div>
        <h1 className="font-bold py-3">Product</h1>
        <ul>
          <li className="font-bold text-2xl mb-3">Name: {product.prodName}</li>
          <div>
            <img src={product.imageUrl} alt={product.prodName} />
          </div>
          <div className="font-bold text-2xl mb-3">{product.price}</div>
          <div className="font-bold text-2xl mb-3">{product.discription}</div>
        </ul>
      </div>
    );
  }
  return <div></div>;
}

export default Product;
