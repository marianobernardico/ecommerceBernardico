import NavBar from "./components/NavBar";
import './App.css';
import {useEffect, useContext, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemDetail from './components/ItemDetail';
import Cart from "./components/Cart";
import CartContext, { MyContext } from "./context/CartContext";


function App() {
  const { cartCount, onAdd } = useContext(MyContext);

  useEffect(()=> {
  }, []);

  return (
    <>
    <CartContext>
    <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListConteiner getting={"Bienvenide!!"}/>}/>
        <Route path= "/category/:id" element={<ItemListConteiner/>}/>
        <Route path= "/item/:id" element={<ItemDetail/>}/>
        <Route path= "/cart" element={<Cart/>}/>
      </Routes>
    </CartContext>
    </>

    
  );
}

export default App;
