import NavBar from "./components/NavBar";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>  
      <NavBar/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Mariano's ecommerce 🤣</p>
        </header>
      </div>
    </div>
    
  );
}

export default App;
