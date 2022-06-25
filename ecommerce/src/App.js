import { useContext, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import ItemDetail from './components/ItemDetail';
import ItemListConteiner from "./components/ItemListConteiner";
import NavBar from "./components/NavBar";
import CartContext, { MyContext } from "./context/CartContext";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  const { cartCount, onAdd } = useContext(MyContext);

  useEffect(()=> {
  }, []);

  // Initialize Firebase
  initializeApp({
    apiKey: "AIzaSyAxFoBkhNg8Oo3r-_OdUdErvftu0br2fmQ",
    authDomain: "ecommercebernardico.firebaseapp.com",
    projectId: "ecommercebernardico",
    storageBucket: "ecommercebernardico.appspot.com",
    messagingSenderId: "258981328134",
    appId: "1:258981328134:web:eb4c41bb060979b65d9a87"
  });

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
