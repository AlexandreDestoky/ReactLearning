import { useState } from "react";
import "./App.css";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  return (
    <div className="App">
      <AddUser newUser={setUsersList}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
