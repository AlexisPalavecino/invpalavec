import React from "react"
import logo from '../../assets/newlogo.png'
import carrito from '../../assets/carrito01.png'
import './Navbar.css'


const NavBar = () => {
    return (
        <header>
        <img src={logo} alt=""/>
        <h1>Tienda Online </h1>
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