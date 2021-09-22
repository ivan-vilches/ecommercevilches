import React from "react";
import ItemCount from "./ItemCount.js";

const style = {
  card: {
    marginTop: 20,
    width: "30%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 20,
  },
  image: {
    width: 200,
    heigth: 200,
    marginRight: "auto",
    marginLeft: "auto",
  },
};

const Item = function ({ id, name, brand, price, initial }) {
  const addToCart = function (quantity) {
    console.log("Se agregaron " + quantity + " unidades al carrito");
  };
  return (
    <div className="card" style={style.card}>
      <h3>{name}</h3>
      <h5>{brand}</h5>
      <p>${price}</p>
      <img style={style.image} className="card-img-top img-thumbnail" />
      <ItemCount initial={1} stock={5} onAdd={() => console.log("agregado")} />
    </div>
  );
};

export default Item;
