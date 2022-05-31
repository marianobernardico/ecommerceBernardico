import NavBar from "./components/NavBar";
import './App.css';
import ItemListConteiner from "./components/ItemListConteiner";



function App() {
  return (
    <div>  
      <NavBar/>
      <div className="App">
        <header className="App-header">
          <ItemListConteiner getting = {"Coming soon 🔜"}/>
        </header>
      </div>
    </div>
    
  );
}

export default App;
