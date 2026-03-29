import React from 'react'
import Features from './Features';

const PricingCard = ({ option }) => {
    // console.log(option);
    
    const {name, price, billing, description, features} = option
    
  return (
    <div className="bg-[#222421] rounded-xl px-8 py-4 h-fit">
      <h2 className="font-bold text-xl text-[#93a65b]">{name}</h2>
      <p className="text-white/70 mb-2">{description}</p>
      <h4 className="text-white font-bold mb-2">
        <span className="text-4xl">{price}$</span>/ {billing}
      </h4>
      <button className="btn hover:bg-[#9dff2e] hover:text-black bg-transparent border-[#9dff2e] mb-3 text-[#9dff2e]">
        Get Started
      </button>
      <div className='mt-2 border-t-1 py-3 border-white/70'>
        <h3 className='font-bold text-lg mb-3'>What included:</h3>
        <ul>
          {features.map((feature, idx) => (
            <Features key={idx} feature={feature}></Features>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard
