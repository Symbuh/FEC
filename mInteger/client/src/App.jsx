import React from 'react';
import axios from 'axios';

import TransactionList from './components/TransactionList.jsx';
import BudgetCategories from './components/BudgetCategories.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: '',
      categoryName: '',
      categoryBudget: '',
      categories: ''
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      .catch((err) => {
        console.log(err);
      })

    axios.get('/api/categories')
      .then((response) => {
        this.setState({
          categories: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    /*
      1. Make our axios post request from the server sending our state in as the req.body
      2. Set the response data to our categories state so that we can render it to the DOM.



    */

    axios.post('/api/categories', {
      categoryName: this.state.categoryName,
      categoryBudget: this.state.categoryBudget
    })
      .then((response) => {
        this.setState({
          categories: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      });

    console.log('Success');
  }
  render() {
    return (
      <div>
      <h1>mInteger</h1>
      <div className="app">
      <TransactionList data={this.state.transactions} categories={this.state.categories}/>

      <div className="category">
        <h3>Budget Categories</h3>
        <BudgetCategories data={this.state.categories} />
          <div className="category-form">
            <div className="category-input">
            <input
              type="text"
              name="categoryName"
              placeholder="Budget Category"
              onChange={this.handleChange}
            />
            <input
              name="categoryBudget"
              type="number"
              onChange={this.handleChange}
              placeholder="Target Budget"
            />
            </div>
            <button onClick={this.handleSubmit}>+</button>
          </div>
      </div>
    </div>
  </div>
    )
  }
}

export default App;