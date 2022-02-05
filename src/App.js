import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React, {useState, useEffect} from 'react'
import LeftPane from './components/LeftPane'
import ChartPane from './components/ChartPane'
import axios from "axios"


function App() {
  const [myStocks, setMyStocks] = useState([]);
  const [activeChart, setActiveChart] = useState([]);

function addStock(e, stock){
  e.preventDefault();
  console.log(stock)
  alert("You added " + stock.description + " to your list!")
  setMyStocks([...myStocks, stock]);
  };

function removeStock(e, stock){
    e.preventDefault();
    setMyStocks(myStocks.filter(tempStock => tempStock.symbol !== stock.symbol))
}

function showChart(e, stock){
  e.preventDefault();
  console.log('THIS IS THE CHART OBJECT WE\'RE ACCESSING: ')
  console.log(stock)
  setActiveChart(stock)
}

useEffect(() => {
  console.log(activeChart)
  axios.get("https://finnhub.io/api/v1/stock/candle?symbol=" + activeChart.symbol + "&resolution=D&from=1631022248&to=1631627048&token=c7rp4gaad3iel5ubg0s0").then(res => {
    activeChart.data = res.data

    console.log('data was set');}
  ).catch(e => console.log(e))
}, [activeChart])

useEffect(() => {
  //for(let stock in myStocks){
    myStocks.map(stock => {
    axios.get('https://finnhub.io/api/v1/quote?symbol=' + stock.symbol + '&token=c7rp4gaad3iel5ubg0s0').then(res => {
      stock.curPrice = res.data.c;
      stock.change = res.data.d;
      stock.percentChange = res.data.dp;
      stock.highPriceOfDay = res.data.h;
      stock.lowPriceOfDay = res.data.l;
      stock.openPriceOfDay = res.data.o;
      stock.previousClosePrices = res.data.pc;
    }).catch(e => console.log(e));
  }
  )
}, [myStocks]); // Only re-run if mystocks changes


  return (
    <div className="App">
      <header></header>
      <LeftPane myStocks={myStocks} addStocks={addStock} removeStock={removeStock} showChart={showChart}/>
      <ChartPane chart={activeChart}/>
    </div>
  );
}

export default App;
