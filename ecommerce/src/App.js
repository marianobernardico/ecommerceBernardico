import NavBar from "./components/NavBar";
import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemDetail from './components/ItemDetail';
import Cart from "./components/Cart";

function App() {
  var [count, setCount] = useState();

  useEffect(()=> {
    setCount(0)
  }, []);

  function onAdd(countItems) {
    setCount(count = count + countItems)
  };

  return (
    <>
    <BrowserRouter>
    <NavBar count={count}/>
      <Routes>
        <Route path= "/" element={<ItemListConteiner getting={"Bienvenide!!"}/>}/>
        <Route path= "/category/:id" element={<ItemListConteiner/>}/>
        <Route path= "/item/:id" element={<ItemDetail onAdd={onAdd}/>}/>
        <Route path= "/cart" element={<Cart count={count}/>}/>
      </Routes>
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
