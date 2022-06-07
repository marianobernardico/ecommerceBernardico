import NavBar from "./components/NavBar";
import './App.css';
import ItemListConteiner from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";
import { useEffect, useState } from "react";



function App() {
  const stock = 10;
  var [count, setCount] = useState();

  useEffect(()=> {
    setCount(0)
  }, []);

  function onAdd(countItems) {
    setCount(count = count + countItems)
  };

  return (
    <div>  
      <NavBar count={count}/>
      <div className="App">
        <header className="App-header">
          <ItemListConteiner getting = {"Primer prueba contador"}/>
          <ItemCount stock = {stock} initial= {1} onAdd={onAdd}/>
        </header>
      </div>
    </div>
    
  );
}

export default App;
