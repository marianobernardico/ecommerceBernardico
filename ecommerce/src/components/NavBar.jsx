import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = ({count}) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg"  style={{backgroundColor: "#E3DC83"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="https://img.icons8.com/ios-filled/50/undefined/m-key.png" width="30" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link" to= "/">Inicio</Link>
                    <Link className="nav-link" to= {`/category/${1}`}>Smartphone</Link>
                    <Link className="nav-link" to= {`/category/${2}`}>PC</Link>
                    <Link className="nav-link" to= {`/category/${3}`}>Tablets</Link>
                </div>
            </div>
            <a className="nav-link" style={{float: "right"}}><CartWidget count = {count}/></a>
            </div>
        </nav>
        </>
        
    );
}
  
export default NavBar;
  