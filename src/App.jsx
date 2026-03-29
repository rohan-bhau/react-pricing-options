import React, { Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultChart/ResultsChart'

const pricingPromise = fetch('PricingData.json').then(res =>res.json())

const App = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense
          fallback={<span className="loading loading-spinner loading-lg absolute left-70 md:left-240 md:top-50 top-30"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </div>
  );
}

export default App
