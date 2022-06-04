import NavBar from "./components/NavBar";
import './App.css';
import ItemListConteiner from "./components/ItemListConteiner";
import ItemCount from "./components/ItemCount";



function App() {
  const stock = 10;
  return (
    <div>  
      <NavBar/>
      <div className="App">
        <header className="App-header">
          <ItemListConteiner getting = {"Primer prueba contador"}/>
          <ItemCount stock = {stock}/>
        </header>
      </div>
    </div>
    
  );
}

export default App;
