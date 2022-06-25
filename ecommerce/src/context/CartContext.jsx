import {createContext, useState, useEffect} from 'react';
export const MyContext = createContext({});

export default function CartContext({ children }) {

    var [cartCount, setCartCount] = useState(0);
    const [itemsCart, setItemsCart] = useState([]);

    useEffect(()=> {
      itemsCart.map((item)=> (
        cartCount += item.quantity
      ));
      setCartCount(cartCount);
    }, [itemsCart]);

    const isInCart = (id) => {
      if(Array.isArray(itemsCart)){
        var someInCart = itemsCart.findIndex(item => item.id === id)
      }
      return someInCart;
    }

    const  addItem = (item, quantity) => {
      const newItem = {...item,
            quantity,
        };
      let pos = isInCart(item?.id);
      if(pos == -1){
        setItemsCart([...itemsCart, newItem]);
      } else {
          let auxItemsCart = [...itemsCart];
          auxItemsCart[pos].quantity +=  quantity;
          setItemsCart(auxItemsCart);
      }

    };
   
    const removeItem = (id) => {
      setItemsCart(itemsCart.filter(item=>item.id !== id));
      if(itemsCart.length ==0){
        setCartCount(0);
      }
    };

    const clear = () => {
        setCartCount(0);
        setItemsCart([]);
    };

    const sumCant =(id)=> {
      let pos = isInCart(id)
      let auxItemsCart = [...itemsCart];
      if(auxItemsCart[pos].stock > auxItemsCart[pos].quantity){
        auxItemsCart[pos].quantity ++;
        setItemsCart(auxItemsCart);
      }
    }

    const restCant =(id)=> {
      let pos = isInCart(id)
      let auxItemsCart = [...itemsCart];
      if(auxItemsCart[pos].quantity != 1){
        auxItemsCart[pos].quantity --;
        setItemsCart(auxItemsCart);
      }
     
  }


    return (
        <MyContext.Provider value={{cartCount,itemsCart, addItem, removeItem, clear, sumCant, restCant, setCartCount}}>{children}</MyContext.Provider>
  )
}
