import React from "react";
import Card from "../component/card/Card";
import cardProps from "../component/card/card.props";
import Shop from "../component/shop/Shop.jsx";
import "./App.css";

function App() {
  const [states, setStates] = React.useState([]);
  const [shop, setShop] = React.useState(false);
  React.useEffect(() => {
    setStates(cardProps);
  }, []);
  return (
    <div className="App">
      <button
        className="shopIcon"
        onClick={() => {
          setShop((shop) => !shop);
        }}
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      {shop ? <Shop /> : null}
      {states.map((el) => {
        return (
          <>
            <Card
              url={el.url}
              title={el.title}
              diagonal={el.diagonal}
              video={el.video}
              price={el.price}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
