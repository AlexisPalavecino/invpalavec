import React from "react"
import logo from '../../assets/newlogo.png'
import lupa from '../../assets/loupe_03.png'
import carrito from '../../assets/carrito01.png'
import './Navbar.css'


const NavBar = () => {
    return (
        <header>
        <img src={logo} alt=""/>
        <input placeholder="Buscar"></input>
        <img src={lupa} alt=""class="lupa"/>
        <nav>
            <a href=""> Home</a>
            <a href=""> Productos</a>
            <a href=""> Ofertas</a>
            <a href=""> Contacto</a>
            
        </nav>
        <img src={carrito} alt="" class="carrito" />
        </header> 
    )
}

export default NavBar