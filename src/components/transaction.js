import React from 'react'
import { Card } from '@material-ui/core';

class Transaction extends React.Component {
    render() {
        return(
          <Card className="media mb4 w-50 center">
            <div className="media-body pl5">
              <h3>Transaction</h3>
              <p><span className="b">ID: </span>{this.props.id}</p>
              <p><span className="b">Type: </span>{this.props.type}</p>
              <p><span className="b">Amount: </span>{this.props.amount}</p>
              <p><span className="b">Effective Date: </span>{this.props.effectiveDate}</p>
            </div>
          </Card>
        )
      }
}

export default Transaction;