import React, { useState, useEffect } from 'react';
import { shownCurrency, url } from './constants';
import './App.css';

function App() {
  const [currency, setCurrency] = useState({})
  const [eur, setEur] = useState('')

  useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((currencies) => setCurrency(currencies))
  }, [])

  const handleInputChange = (event) => {
    setEur(event.target.value)
  }

  return (
    <div className='container'>
      <p className='title'>Currency converter</p>
      <input type='number' min="0" className='input' placeholder='Enter EUR' value={eur} onChange={handleInputChange}/>
        {Object.keys(currency).length && shownCurrency.map((cur) => {
          return <div className='currency-container' key={cur}>
            <p className='currency-name'>{cur}</p>
            <p className='currency'>{(eur * (currency.rates[cur])).toFixed(2)}</p>
          </div>
        })}
    </div>
  );
}

export default App;


