import React from 'react';
import TransactionList from './components/TransactionList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  //component

  componentDidMount() {
    /*
      Make get request to the server
      set our state.transactions to the data returned
    */


    axios.get('/api/transactions')
      .then((response) => {
        this.setState({
          transactions: response.data
        })
      })


  }
  render() {
    return (
      <div>
      <h1>mInteger</h1>
      <div className="app">
      <TransactionList data={this.state.transactions}/>

      <div className="category">
        <h3>Budget Categories</h3>
        <div className="category-list">
          <div className="category-data">Food</div>
          <div className="category-data">Entertainment</div>
          <div className="category-data">Transportation</div>
          <div className="category-data">Rent</div>
          <div className="category-data">Bills</div>
        </div>
          <div className="category-form">
            <div className="category-input">
            <input
              type="text"
              placeholder="Budget Category"
            />
            <input
              type="number"
              placeholder="Target Budget"
            />
            </div>
            <button>+</button>
          </div>
      </div>
    </div>
  </div>
    )
  }
}

export default App;