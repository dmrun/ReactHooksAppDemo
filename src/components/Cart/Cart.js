//This is a Use State Demo
import React from "react";
import { useState } from "react";

const carList = [
  {
    id: 0,
    brand: "BMW",
    model: "X5",
    price: "$23000",
    release_date: "2015-10-12",
  },

  {
    id: 1,
    brand: "Audi",
    model: "S3",
    price: "$35000",
    release_date: "2013-08-23",
  },

  {
    id: 2,
    brand: "Bugatti",
    model: "Veyron",
    price: "$500000",
    release_date: "2006-02-10",
  },

  {
    id: 3,
    brand: "VW",
    model: "Polo",
    price: "$8000",
    release_date: "2018-05-03",
  },

  {
    id: 4,
    brand: "Fiat",
    model: "Punto",
    price: "$6000",
    release_date: "2017-01-25",
  },
];

export default function Cart() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [prdId, setprdId] = useState(0);

  return (
    <div>
      Current Cart Count: {count}
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
            setCart([...cart, carList[prdId]]);
            setprdId(prdId + 1);
          }}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            if (count < 0) {
              setCount(0);
            }
            if (prdId > -1) {
              cart.pop();
              setprdId(prdId - 1);
            }
          }}
        >
          Remove from cart
        </button>
      </div>
      Product List:
      {cart.map((prd) => (
        <p>
          {prd.brand} - {prd.model}
        </p>
      ))}
    </div>
  );
}
