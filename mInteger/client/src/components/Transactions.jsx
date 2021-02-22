import React from 'react';

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggledOn: false,
      selectedCategory: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState(state=> ({
      isToggledOn: !state.isToggledOn
    }));
  }

  render() {
    let categorySelector;
    let isToggledOn = this.state.isToggledOn;
    if (!isToggledOn) {
      categorySelector = <div className="txn-data" onClick={this.handleClick}>
                           {this.props.category_id || "None"}
                        </div>
    } else if(this.props.categories === '') {
      categorySelector = <div className="txn-data" onClick={this.handleClick}>
                           {this.props.category_id || "None"}
                        </div>
    } else {
      categorySelector = <div className="txn-data">
                          <select>
                              {
                                this.props.categories.map((category) => {
                                  return (
                                    <option key={category.id} value={category.categoryName}>
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