import React from 'react'
import Card from '../UI/Card'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {

  return (
    <Card className="expenses">
      {props.items.map(el => <ExpenseItem {...el} key={el.id}/>)}
    </Card>
  )
}
