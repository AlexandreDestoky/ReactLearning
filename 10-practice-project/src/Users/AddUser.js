import React from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

export default function AddUser() {
  const addUserHandler = e => {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler} >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" />
        <button>Add User</button>
      </form>
    </Card>
  );
}
