import React from 'react';
import './StockInfo.css';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


export class StockInfo extends React.Component {
  constructor(props){
    super(props);
}
  render(props) {


      return (
        <div className="StockInfo p-1" key={this.props.stock.description}>
          <Card style={{ width: '18rem' }} bg="dark">
              <Card.Body>
                  <Card.Title className="mb-1 text-light">{this.props.stock.description + " | " + 
                  this.props.stock.symbol}</Card.Title>
                  <Card.Subtitle className="mb-1 text-muted">Share Value: ${this.props.stock.curPrice}</Card.Subtitle>
                  <Card.Subtitle className=" text-muted">24hr % Change: {this.props.stock.percentChange}</Card.Subtitle>
              </Card.Body>
              <Button className="mb-1 btn-secondary" onClick={this.props.onClick}>Remove Stock</Button>
              <Button className="mb-1 btn-primary" onClick={(e) => {this.props.showChart(e, this.props.stock)}}>Show Chart</Button>
          </Card>
      </div>
      );
  }
}

export default StockInfo;