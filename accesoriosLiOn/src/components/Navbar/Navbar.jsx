import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar-container">
            <Link  className="a" to="/"><img className="logo" src="/images/logo1024.png" alt="logo accesorios Li-On" /></Link>
            <NavLink to="/categoría/Guantes" className="botonNavbar" id='guantes'>Guantes</NavLink>
            <NavLink to="/categoría/Uñas" className="botonNavbar" id='uñas'>Uñas</NavLink>
            <NavLink to="/categoría/Medias"className="botonNavbar" id='medias'>Medias</NavLink>
            <NavLink to="/cart" className="botonNavbar" id='carrito'><CartWidget/></NavLink>
        </nav>
    )
}

export default Navbar