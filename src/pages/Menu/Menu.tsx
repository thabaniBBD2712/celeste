import React, { useState } from "react";
import CelesteHeader from "../../components/header/header";
import "./Menu.css";

export interface IMenuProps {}

const myObject = {
  key1: {
    text: 'Glazed oysters with zucchini pearls and sevruga caviar',
    isBold: true
  },
  key2: {
    text: 'Wine pairing: kleine zalze brut rose',
    isBold: false
  },
  key3: {
    text: 'Seared anhi tuna with provincial vegetables and tapenade croutons',
    isBold: true
  },
  key4: {
    text: 'Wine pairing: bizoe semillon',
    isBold: false
  },
  key5: {
    text: 'Bream with asparagus, tempura mussels and a lime velouté',
    isBold: true
  },
  key6: {
    text: 'Wine pairing: red city blend',
    isBold: false
  },
  key7: {
    text: 'Aged gouda with espresso, hazelnut and onion',
    isBold: true
  },
  key8: {
    text: 'Wine pairing: thelema early harvest',
    isBold: false
  },
  key9: {
    text: 'Dark chocolate panna cotta with a rhubarb and cherry compote',
    isBold: true
  },
  key10: {
    text: 'Wine pairing: clarington sauvignon blanc',
    isBold: false
  },
};


const Menu: React.FunctionComponent<IMenuProps> = (props) => {
    const [quantity, setQuantity] = useState(0);

const decrement = () => {
    quantity>0?setQuantity(quantity-1):setQuantity(0)
  };
  const increment = () => {
    setQuantity(quantity+1)
  };


  return (
    <div className="menu-container">
      <CelesteHeader label="Testing Menu" />
      <div className="body-container">
        {Object.keys(myObject).map((key) => {
          const item = myObject[key as keyof typeof myObject]; // Type assertion
          return (
            <div key={key}>
              {item.isBold ? (
                <p className="bold">{item.text}</p>
              ) : (
                <p className="normal">{item.text}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="footer-container">
        <div className="add">
            <button onClick={decrement} className="btn-quantity">-</button><span>{quantity}</span><button onClick={increment} className="btn-quantity">+</button>
        </div>
        <div className="person">Number of Persons</div>
        <div className="price">R100 per person</div>
        <button className="buy">Add to Order</button>
      </div>
    </div>
  );
};

export default Menu;
