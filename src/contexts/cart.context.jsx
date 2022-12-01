import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  const existingCartItemIdx = cartItems.findIndex(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItemIdx !== -1) {
    cartItems[existingCartItemIdx].quantity += 1;
    return [...cartItems];
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  addItemToCart: () => {},
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = { addItemToCart, cartItems, isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
