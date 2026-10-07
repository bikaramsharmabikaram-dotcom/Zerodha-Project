// import { positions } from "../data/data";
//niche wale line me (usestate):-ka used kar rahe hai store the data and (useEffect):-is used for connect to API
import { useState, useEffect } from "react";
// axios is the package which is connect to the API 
import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Positions = () => {
  //yaha ham variable create kar rahe hai kyuki yaha par ham data ko stored karenge and API call se connect kar ke us data ko fetch karenhe
  // allPositions:-dtata hai or setAllPositions:-ye us data ka function hai jo usako modify karega
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    //ye axious.get method backend se connect karega
    axios.get("http://localhost:3002/allPositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);


  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
