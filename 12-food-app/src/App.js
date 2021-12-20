import "./App.css";
import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/cart-context";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }
  return (
    <CartContextProvider>
      {isOpenModal && <Cart close={closeModal}/>}
      <Header open={openModal}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
