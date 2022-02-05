import React from 'react';
import './StockChart.css'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import { Line } from 'react-chartjs-2';

//https://www.youtube.com/watch?v=yOousFGfmZc

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)


function StockChart(props) {


      return (
        <>
            {(typeof props.chart.data !== 'undefined') && (typeof props.chart.data.c !== 'undefined') && (typeof props.chart.data.t !== 'undefined') ? (
            <div>
                <div>{JSON.stringify(props.chart.description)}</div>
                <Line
                    datasetIdKey={props.chart.symbol}
                    data={{
                      labels: props.chart.data.t,
                      datasets: [{
                        label: props.chart.description,
                        data: props.chart.data.c,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                      }]
                    }}
                  />
            </div>
            ) : <header>No Data Available for the chart!</header>} 
        </>
      );
  }

export default StockChart;
