import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = ({count}) => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><Link className="nav-link" to= "/">Inicio</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link className="nav-link" to= {`/category/${1}`} style={{color : "black"}}>Apple</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="nav-link" to= {`/category/${2}`} style={{color : "black"}}>Samsung</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className="nav-link" to= {`/category/${3}`} style={{color : "black"}}>Otros</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Link className="nav-link" to= "/cart"><CartWidget count = {count}/></Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    );
}
  
export default NavBar;
  