import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("fr-BE", { month: "long" });
  const day = props.date.toLocaleString("fr-BE", { day: "2-digit" });
  const year = props.date.toLocaleString("fr-BE", { year: "numeric" });

  return (
    <div className="expense-date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
