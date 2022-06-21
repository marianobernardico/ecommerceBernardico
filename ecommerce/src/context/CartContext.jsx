import {createContext, useState, useEffect} from 'react';
export const MyContext = createContext({});

export default function CartContext({ children }) {

    var [cartCount, setCartCount] = useState(0);

    useEffect(()=> {
        setCartCount(0);
      }, []);
    
    function onAdd(countItems) {
        setCartCount(cartCount = cartCount + countItems)
      };

    return (
        <MyContext.Provider value={{cartCount, onAdd}}>{children}</MyContext.Provider>
  )
}
