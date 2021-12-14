import React from "react";

export default function AddUser() {
  const addUserHandler = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="age" />
      <button>Add User</button>
    </form>
  );
}
