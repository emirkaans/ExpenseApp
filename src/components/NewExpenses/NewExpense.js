import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const newExpenseHandler = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const stopEditingHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
