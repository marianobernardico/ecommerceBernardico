import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
        <span class="navbar-brand">Inicio</span>
        <CartWidget count = {4}/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/marianobernardico/ecommerceBernardico"> Link Github</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
      </nav>
    );
}
  
export default NavBar;
  