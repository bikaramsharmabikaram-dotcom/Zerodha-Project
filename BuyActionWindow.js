import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";
//YAHA par ham user se data ko read kar rahe hai usake liye usestate ka used kar rahe hai
const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  //ye function "buy-button" ko handle karega;
  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", { // es line me (axios.post) ka used esliye kar rahe hai kyuki hame usser se data lena hai database ke andar
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };
  //ye function close button ko handle karega 
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div>
        <span>Margin required ₹140.65</span>
      </div>

      <div className="buttons" style={{ marginTop: "20px", gap: "20px" }}>
        <Link className="btn btn-blue" onClick={handleBuyClick}>
          Buy
        </Link>
        <Link to="" className="btn btn-grey" style={{ marginLeft: "20px" }} onClick={handleCancelClick}>
          Cancel
        </Link>
      </div>
    </div>

  );
};

export default BuyActionWindow;
