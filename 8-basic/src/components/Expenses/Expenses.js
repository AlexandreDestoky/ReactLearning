import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const [year, setYear] = useState();
  const filterYear = expenses => {
    return year ? expenses.filter(el => el.date.getFullYear() === year) : expenses;
  };

  return (
    <Card className="expenses">
      <ExpensesFilter changeYear={setYear} />
      {filterYear(props.items).map(el => (
        <ExpenseItem {...el} key={el.id} />
      ))}
    </Card>
  );
}
