import { useState } from "react";
import "./App.css";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { id: "jiodmdsjcms,qsx54", name: "Jean", age: 12 },
    { id: "jiodbtgyyms,qsx54", name: "Pierre", age: 48 },
  ]);
  return (
    <div className="App">
      <AddUser newUser={setUsersList}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
