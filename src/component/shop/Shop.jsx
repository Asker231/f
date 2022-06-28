import React from "react";
import Style from "./shop.style.module.css";
import { useSelector } from "react-redux";

function Shop() {
  const selectors = useSelector((state) => state.cards.cardArray);
  return (
    <div className={Style.wrapShop}>
      {selectors.map((el) => {
        return (
          <>
            <div className={Style.card}>
              <img src={el.url} alt="alt" />
              <p>{el.title}</p>
              <h6>{el.diagonal}</h6>
              <h5>{el.video}</h5>
              <span>{el.price}</span>
              <button>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Shop;
