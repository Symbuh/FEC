import React from 'react';
import Transactions from './Transactions.jsx';


const TransactionList = (props) => {
  if(props.data === '') {
    return (<div>

    </div>)
  }
  return (
    <div className="txn">
      <h3>Transactions</h3>
      <div className="txn-table">
        <div className="txn-header txn-row">
          <div className="txn-data">Date</div>
          <div className="txn-data">Description</div>
          <div className="txn-data">Amount</div>
          <div className="txn-data">Category</div>
        </div>
        {
          props.data.map((transaction) => {
            return (
              <Transactions key={transaction.id} transaction={transaction} categories={props.categories}/>
            )
          })
        }
    </div>
    </div>
  );

}

export default TransactionList;

