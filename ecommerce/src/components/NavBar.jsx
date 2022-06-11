import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


const NavBar = ({count}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
        <span className="navbar-brand">Inicio</span>
        <CartWidget count = {count}/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/marianobernardico/ecommerceBernardico"> Link Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
      </nav>
    );
}
  
export default NavBar;
  