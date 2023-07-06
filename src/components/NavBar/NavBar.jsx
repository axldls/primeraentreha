import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Marolio Online</h1>

        <nav>
            <ul>
                <li>Guitarras</li>
                <li>Pianos</li>
                <li>Baterias</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar