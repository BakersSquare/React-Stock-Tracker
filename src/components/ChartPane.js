import React from 'react';
import './ChartPane.css'
import StockChart from './StockChart'

//TIME_SERIES_INTRADAY

function ChartPane(props) {

      return (
          <>
          <StockChart chart={props.chart}/>
          </>
      );
  }

export default ChartPane;
