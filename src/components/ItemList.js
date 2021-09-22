import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import Loading from "./Loading";

const catalog = [
  { id: "1", name: "Aceite de Oliva", brand: "chef", price: 50, initial: 2 },
  { id: "2", name: "Incienso", brand: "Lunag chanpak", price: 100, initial: 1 },
  {
    id: "3",
    name: "Piedra de Cuarzo",
    brand: "sin marca",
    price: 20,
    initial: 4,
  },
];

const ItemList = function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(catalog);
      }, 2000);
    });

    task.then(
      (res) => {
        setProducts(res);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="row">
        {products.map((product) => (
          <Item
            id={product.id}
            name={product.name}
            brand={product.brand}
            price={product.price}
            initial={product.initial}
            min={product.min}
            max={product.max}
          />
        ))}
        ;
      </div>
    </>
  );
};

export default ItemList;
