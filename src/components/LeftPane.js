import React, { useState, useEffect } from 'react';
import './LeftPane.css'
import StockList from "./StockList"
import RecommendedList from "./RecommendedList"
import axios from "axios"



function LeftPane (props) {

    let listSelect=[0, 1, 2]
    const [showList, setList] = useState(listSelect)
    const [recommendedStocks, setRecStocks] = useState([])
    const myStocks = props.myStocks

    useEffect(() => axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7rp4gaad3iel5ubg0s0').then(res => {
      const top100 = res.data.slice(0,100);
      setRecStocks(top100);
    }),[]);

    function setList0(){
      setList(0);
    }

    function setList1(){
      setList(1);
    }

    function setList2(){
      setList(2);
    }

      return (
        <>
        <div>
          <div className="btn-group p-1" role="group" aria-label="Basic example">
            <button type="button" id="0" onClick={setList0} className="btn btn-secondary">My Stocks</button>
            <button type="button" id="1" onClick={setList1} className="btn btn-secondary">Recommended</button>
            <button type="button" id="2" onClick={setList2} className="btn btn-secondary">Search</button>
          </div>
          {showList === 0 &&
          <StockList myStocks={props.myStocks} removeStock={props.removeStock} showChart={props.showChart}/>}
          {showList === 1 &&
          <RecommendedList addStock={props.addStocks} recStocks={recommendedStocks}/>}
          {showList === 2 &&
          <header>This feature is not yet supported!</header>}
        </div>
        </>
      );
}

export default LeftPane;

//Consider putting the button group INSIDE this pane. Then you can do an if/else statement to determine which list element to show. Create a component for each list element, and then render it depending on which button is selected. Can also create an 'isSelected' helper function in this class.
