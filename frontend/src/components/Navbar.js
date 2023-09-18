import'./Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            
            <div className="navbar__logo">
                <h2>JLVM</h2>
            </div>


            
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                       <i className="fas fa-shopping-cart"></i>
                       <span>
                        Carrinho
                        <span className="cartlogo_badge">0</span>

                       </span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Loja

                    </Link>
                </li>
            </ul>

            {/* menu*/}
            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar