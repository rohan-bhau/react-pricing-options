import React, { use } from 'react'
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData);

    
    return (
      <div className="bg-[#1f2937] px-10 py-5">
        <h2 className='text-5xl font-bold text-center mb-5'>Plans That works <br /> best for you</h2>

        <div className='grid lg:grid-cols-4 gap-10 '>
          {pricingData.map((option, idx) => (
            <PricingCard key={idx} option={option}></PricingCard>
          ))}
        </div>
      </div>
    );
};

export default PricingOptions
