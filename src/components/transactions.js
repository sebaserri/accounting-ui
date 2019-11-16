import React from 'react'
import Transaction from './transaction';

class Transactions extends React.Component {

    render() {
      return (
        <div className="container-fluid">
          <ul className="media-list">
            {
              this.props.transactions.map((t) => {
                return <Transaction key={ t.id }
                                    type={ t.type }
                                    amount={ t.amount }
                                    effectiveDate={ t.effectiveDate } />
              })
            }
          </ul>
        </div>
      )
    }
  }
  

export default Transactions;