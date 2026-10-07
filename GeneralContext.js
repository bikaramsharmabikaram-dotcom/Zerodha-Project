import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
/*yaha par hamne ak generalcontext create kiya hai using React.createcontext
  so context is basically a peace of item jo multiple component share karenge  */
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => { },
  closeBuyWindow: () => { },
});
//const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false):- ye line of logic simple state ko track karta hai like:-agar buywindow open hai to use close kar or close hai to use open kar dena hai
export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  /* ye stock ka uid:(unique identifier for the stock):-and the uid is nothing but the name of the stock 
   kyuki every stock ka name and key different hota hai esliye "uid" used karte hai or "uid" ke through 
   ham ye identify kar pate hai ki koin se stock par click kiya gya hai*/
  const [selectedStockUID, setSelectedStockUID] = useState("");
  /* yaha buywindow open hai to ye  lin of  logic ese close kar dengi :-const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);*/
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  /* yaha buywindow close hai to ye  lin of  logic ese open kar dengi :-const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);*/

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
      // ham uid ke throgh ye pata kar pta kar pate hai ki user ne koin stock par click kiya hai:uid={selectedStockUID}, es logic ke through;
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />} 
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
