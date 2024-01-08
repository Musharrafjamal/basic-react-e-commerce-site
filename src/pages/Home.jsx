import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((productList) => {
        const sliceProductList = productList.slice(0, 6);
        setProductList(sliceProductList);
        // console.log(sliceProductList)
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <h1 className="font-bold text-3xl">Trending Products 🔥</h1>
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
              />
              <h2 className="font-bold">{product.title}</h2>
              {/* <h2>{product.description}</h2> */}
              <p className="font-semibold text-green-600">${product.price}</p>
            </Link>
          );
        })}
      </div>
      <Link to={"/products"} className="border-2 border-stone-500 rounded-md py-2 px-8 hover:bg-slate-200" >
        Go to product list
      </Link>
    </div>
  );
};

export default Home;
