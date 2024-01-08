import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        // console.log(product.title)
      });
  }, []);
  return (
    <div>
      {product ? (
        <div
          key={product.id}
          to={`/products/${product.id}`}
          className="flex items-center gap-2 p-2 border-2 rounded-lg"
        >
          <img
            src={product.images ? product.images[0] : product.image}
            alt=""
            className="w-2/5 rounded-lg"
          />
          <h2 className="font-bold text-3xl">{product.title}</h2>
          {/* <h2>{product.description}</h2> */}
          <p className="font-semibold text-green-600">${product.price}</p>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Product;
