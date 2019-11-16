import React from 'react'

class Transaction extends React.Component {
    render() {
        return(
          <li className="media">
            <div className="media-body">
              <p>{this.props.id}</p>
              <p>
                {this.props.type} &nbsp;
                <span className="label label-info">{this.props.amount}</span>
              </p>
              <p>{this.props.effectiveDate}</p>
            </div>
            <hr/>
          </li>
        )
      }
}

export default Transaction;