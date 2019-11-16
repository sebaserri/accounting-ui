import React from 'react'
import Transaction from './transaction';

class Transactions extends React.Component {

    render() {
      return (
          <div className="bg-light-silver pb5 pt4">
            {
              this.props.transactions.map((t) => {
                return <Transaction key={ t.id }
                                    id={t.id}
                                    type={ t.type }
                                    amount={ t.amount }
                                    effectiveDate={ t.effectiveDate } />
              })
            }
        </div>
      )
    }
  }
  

export default Transactions;