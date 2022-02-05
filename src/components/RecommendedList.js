import React, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import './RecommendedList.css'

function RecommendedList(props) {
  const [recStocks, setStocks] = useState(props.recStocks)


  return <div>
    <ListGroup>
     {recStocks && recStocks.map((stock) => { 
     
     return(
       <button type="button" onClick={e => (props.addStock(e, stock))} className="list-group-item list-group-item-action" key={stock.symbol}>{stock.description}</button>
     )
    })}
    </ListGroup>

  </div>;
}

export default RecommendedList;
