import React, {Component} from 'react';
import Transactions from './components/transactions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { transactions: [] }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/transaction')
    .then(res => res.json())
    .then((data) => {
        this.setState({ transactions: data.result })
    })
    .catch(console.log)
  }

  render() {
    if (this.state.transactions.length > 0) {
      return (
        <div className="container-fluid">
          <Transactions transactions={this.state.transactions} />
        </div>
      )
    } else {
      return <p className="text-center">Loading...</p>
    }
  }

}

export default App;
