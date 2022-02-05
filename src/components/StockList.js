import React, { useState } from 'react';
import './StockList.css';

import StockInfo from './StockInfo';


function StockList(props) {


    //myStocks should be a [stock, setStock] = useState()
    const [myStocks, setStocks] = useState(props.myStocks); 

    function removeStock(e, stock){
      e.preventDefault();
      setStocks(myStocks.filter(tempStock => tempStock.symbol !== stock.symbol))
  }
      return (
        <>
        <div className="scrollbar scrollbar-danger">
        <div className="force-overflow">
          {myStocks !== [] ? (
            <div>

            {myStocks && myStocks.map(stock =>
              {
              console.log(stock)
              return(
              <StockInfo stock={stock} showChart={props.showChart} onClick={e => {  removeStock(e, stock);
                (props.removeStock(e, stock))}
              }/>)}
              )
              }
            </div>
          ) : <div>Start by adding stocks to your stocklist!</div>}
        </div>
        </div>
        </>
      );
  
}

export default StockList;
