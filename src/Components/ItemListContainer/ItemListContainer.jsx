import React from "react";
import producto from '../../assets/imgprd01.jpg'
import producto2 from '../../assets/imgprd02.jpg'
import producto3 from '../../assets/imgprd03.jpg'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    const {miValor} = props;
    const {mivalor2} = props;
    const {mivalor3} = props;
    return(
    <>
        <main class="container">
        <div>
        <img src={producto} alt=""/>
            <h3>Producto 1</h3>
            {miValor}         
        </div>
        <div>
        <img src={producto2} alt=""/>
            <h3>Producto 2</h3>
            {mivalor2}         
        </div>
        <div>
        <img src={producto3} alt=""/>
            <h3>Producto 3</h3>
            {mivalor3}         
        </div>
        </main>
    </>
    
    
    )
    
}

