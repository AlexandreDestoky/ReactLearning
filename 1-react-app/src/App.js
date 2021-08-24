import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// import Item from "./Components/Item/Item.js";
import Form from "./Components/Form/Form.js";
function App() {
  
  return (
    <div className="App">
      <h1 className="text-center mt-3">Todo-List</h1>
      <Form/>
    </div>
  );
}

export default App;
