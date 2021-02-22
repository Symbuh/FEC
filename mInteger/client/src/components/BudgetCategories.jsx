import React from 'react';

const BudgetCategories = (props) => {
  //debugger
  if(props.data === '') {
    return (<div>
    </div>)
  }
  return (
    <div className="category-list">
        {
          props.data.map((category) => {
            return (
              <div className="category-data" key={category.id}>
                {category.categoryName}
              </div>
            )
          })
        }
    </div>
  );
}
{/* <div className="category-list">
<div className="category-data">Food</div>
<div className="category-data">Entertainment</div>
<div className="category-data">Transportation</div>
<div className="category-data">Rent</div>
<div className="category-data">Bills</div>
</div> */}

export default BudgetCategories;