import React from 'react';


const TransactionList = (props) => {
  //debugger
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
        </div>
        {
          props.data.map((transaction) => {
            return (
              <div className="txn-row" key={transaction.id}>
                  <div className="txn-data">{transaction.date}</div>
                  <div className="txn-data">{transaction.description}</div>
                  <div className="txn-data">{transaction.amount}</div>
              </div>
            )
          })
        }
    </div>
    </div>
  );
}

export default TransactionList;

