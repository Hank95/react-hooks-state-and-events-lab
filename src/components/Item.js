import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function buttonClick() {
    setInCart((inCart) => !inCart);
  }
  const itemClass = inCart ? "in-cart" : null;

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={buttonClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
