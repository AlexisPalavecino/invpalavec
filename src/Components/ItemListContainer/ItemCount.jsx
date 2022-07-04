
import React, { useState } from 'react'

const ItemCount = ({stock}) => {

  const [cuenta, setCuenta] = useState(2)

const sumar = () => {
  if (cuenta < stock){
    setCuenta (cuenta + 1)
  }else{
    alert=('No se puede agregar más')
  }
   
}
 
const restar = () => {
  if (cuenta > 0){
  setCuenta (cuenta - 1) 
  }
}



  return (
    <> 
      <div>
        <button onClick={restar}>Restar</button> 
        <p>{cuenta}</p> 
        <button onClick={sumar}>Sumar</button>  
      </div> 
    </>
  )
}

export default ItemCount
