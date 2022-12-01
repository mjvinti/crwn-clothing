import { createContext, useEffect, useState } from "react";

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
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    addItemToCart,
    cartCount,
    cartItems,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
