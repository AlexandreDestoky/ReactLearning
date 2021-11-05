import React from 'react'
import Card from '../UI/Card'
import "./Expense.css"
import ExpenseItem from './ExpenseItem';

export default function Expense(props) {
  return (
    <Card className="expenses">
      {props.data.map(el => <ExpenseItem {...el} key={el.id}/>)}
    </Card>
  )
}
