import React from 'react';
import axios from 'axios';

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggledOn: false,
      selectedCategory: '',
      identification: '',
      transaction: this.props.transaction
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(event) {
    this.setState(state=> ({
      isToggledOn: !state.isToggledOn
    }));
  }
  handleChange(event) {
    this.setState({
      selectedCategory: event.target.value
      //identification: event.target.name
    })
    // axios.patch('/api/transactions', {
    //   data: {
    //     selectedCategory: this.state.selectedCategory,
    //     id: this.state.transaction.id
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    //   /*

    this.handleClick();
  }

  render() {
    let categorySelector;
    let isToggledOn = this.state.isToggledOn;

    //Fix istoggledon
    if (!isToggledOn) {
      categorySelector = <div className="txn-data" onClick={this.handleClick}>
                           {this.state.selectedCategory || "None"}
                        </div>
    } else if(this.props.categories === '') {
      categorySelector = <div className="txn-data" onClick={this.handleClick}>
                           {this.props.category_id || "None"}
                        </div>
    } else {
      categorySelector = <div className="txn-data">
                          <select onChange={this.handleChange}>
                              {
                                this.props.categories.map((category) => {
                                  return (
                                    <option key={category.id} name={category.id} value={category.categoryName}>
                                      {category.categoryName}
                                    </option>
                                  )
                                })
                              }
                          </select>
                        </div>
    }
    return(
      <div className="txn-row" key={this.props.transaction.id}>
        <div className="txn-data">{this.props.transaction.date}</div>
        <div className="txn-data">{this.props.transaction.description}</div>
        <div className="txn-data">{this.props.transaction.amount}</div>
        {categorySelector}
      </div>
    )
  }
}

export default Transactions;