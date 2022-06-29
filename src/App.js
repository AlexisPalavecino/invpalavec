import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import './App.css';



const App = () => {

  const valor2 ="$2000"
  const valor ="$100"
  const valor3 ="$3000"
  
  return (
   <>
      <NavBar />
      <ItemListContainer mivalor2 = {valor2} mivalor3 = {valor3} miValor = {valor}/>
   
  </>
    
    
  );
}

export default App;
