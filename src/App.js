import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
import Country from './components/Country/Country'
import Cart from './components/Cart/Cart';

function App() {
  const [country, setCountry] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountry(data);
        console.log(data);
      })
      .catch(err => console.log("Error:", err));

  },[])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  
  return (
    <div className="App">
      <h1>Country Length: {country.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <header className="App-header">
        {
          
          country.map(country => <Country country= {country} handleAddCountry={handleAddCountry} ></Country>)

        }
        
      </header>
    </div>
  );
}

export default App;
