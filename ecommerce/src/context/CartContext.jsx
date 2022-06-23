import {createContext, useState, useEffect} from 'react';
export const MyContext = createContext({});

export default function CartContext({ children }) {

    var [cartCount, setCartCount] = useState(0);
    const [itemsCart, setItemsCart] = useState([]);


    useEffect(()=> {
        setCartCount(0);
      }, []);
      
    
    
      function isInCart(id) {
        if(Array.isArray(itemsCart)){
            var someInCart = itemsCart.some(x => x.item.id == id)
        }
        return someInCart != undefined;
    };

    function addItem(item, quantity) {
        const newItem = {item,
            quantity,
        };
        if(isInCart(newItem.item.id)){
            console.log("adentro");
            const findProduct = itemsCart.find(item => item.id === newItem.id);
            const productIndex = itemsCart.indexOf(findProduct);
            itemsCart[productIndex].quantity += quantity
            setItemsCart(itemsCart);
            setCartCount(itemsCart[productIndex].quantity)
            console.log(itemsCart)

          } else {
            setCartCount(cartCount = cartCount + quantity)
            itemsCart.quantity = cartCount;
            console.log(itemsCart);
          }

    };

    function removeItem(itemId) {
    };

    function clear() {
        setCartCount(0);
        setItemsCart([]);
    };


    return (
        <MyContext.Provider value={{cartCount,itemsCart, addItem, removeItem, clear, isInCart, setItemsCart}}>{children}</MyContext.Provider>
  )
}
