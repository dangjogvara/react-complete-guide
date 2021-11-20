import './ExpenseItem.css';

function ExpenseItem() {
  const expenseItem = new Date(2021, 11, 20);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 295.67;

  return (
    <div className="expense-item">
      <div>{expenseItem.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
