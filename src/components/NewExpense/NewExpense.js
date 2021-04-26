import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, changeExpenseFormVisible] = useState(
    props.isVisible
  );

  const saveExpenseDataHandler = (expenseVal) => {
    const expenseData = {
      ...expenseVal,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    changeFormVisible();
  };

  const changeFormVisible = () => {
    changeExpenseFormVisible((previousFormVisibleVal) => {
      return !previousFormVisibleVal;
    });
  };

  let ExpenseFormContent;

  if (expenseFormVisible) {
    ExpenseFormContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={changeFormVisible}
      />
    );
  } else {
    ExpenseFormContent = (
      <button onClick={changeFormVisible}>New Expense </button>
    );
  }
  return <div className="new-expense">{ExpenseFormContent}</div>;
};

export default NewExpense;
