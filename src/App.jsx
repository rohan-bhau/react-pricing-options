import React from 'react'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('PricingData.json').then(res =>res.json())

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </div>
  );
}

export default App
