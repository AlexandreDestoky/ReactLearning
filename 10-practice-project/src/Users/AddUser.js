import React, { useState } from "react";
import Card from "../UI/Card";
import Bouton from "../UI/Bouton";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [userNameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const addUserHandler = e => {
    e.preventDefault();
    if (!userNameInput.trim() || !ageInput.trim() || +ageInput < 1) return;
    // console.log(userNameInput);
    // console.log(ageInput);
    setUserNameInput("");
    setAgeInput("");
    let newUser = {
      id : Math.random().toString(),
      name:userNameInput,
      age:ageInput
    }
    props.newUser(prevState => [...prevState, newUser])
  };


  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={e => setUserNameInput(e.target.value)}
          value={userNameInput}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          onChange={e => setAgeInput(e.target.value)}
          value={ageInput}
        />
        <Bouton>Click</Bouton>
      </form>
    </Card>
  );
}
