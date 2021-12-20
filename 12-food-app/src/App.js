import "./App.css";
import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }
  return (
    <>
      {isOpenModal && <Cart close={closeModal}/>}
      <Header open={openModal}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
