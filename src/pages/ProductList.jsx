import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((productList) => {
        setProductList(productList);
        // console.log(sliceProductList)
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <h1 className="font-bold text-3xl">All Products💡</h1>
      <div className="grid grid-cols-3 gap-4">
        {productList.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex flex-col items-center gap-2 p-2 border-2 rounded-lg"
            >
              <img
                src={product.images ? product.images[0] : product.image}
                alt=""
                className="w-3/5 rounded-lg"
                loading="lazy"
              />
              <h2 className="font-bold">{product.title}</h2>
              {/* <h2>{product.description}</h2> */}
              <p className="font-semibold text-green-600">${product.price}</p>
            </Link>
          );
        })}
      </div>
      <Link
        to={"/"}
        className="border-2 border-stone-500 rounded-md py-2 px-8 hover:bg-slate-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ProductList;
