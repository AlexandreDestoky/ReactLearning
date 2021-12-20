import React, { useReducer } from "react";

export const CartContext = React.createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if(existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          amount : existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE": 
    let index = state.items.findIndex(el => el.id === action.id);
    let currentItem = state.items[index];
    let updatedItemsRemove;
    if(currentItem.amount > 1) {
      updatedItemsRemove = [...state.items];
      updatedItemsRemove[index].amount -= 1;
    } else {
      updatedItemsRemove = state.items.filter(el => el.id !== action.id)
    }
    return {
      items: updatedItemsRemove,
      totalAmount: Math.round((state.totalAmount - currentItem.price )* 100) / 100,
      // totalAmount: state.totalAmount - currentItem.price,
    };
    default:
      return defaultCartState;
  }
};

export default function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}
