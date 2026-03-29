import { CircleCheckBig } from 'lucide-react';
import React from 'react'

const Features = ({ feature }) => {
    console.log(feature);
    
    return (
        <li className='flex gap-3 mb-2'>
          <CircleCheckBig color="#0d7f0b" />
          {feature}
        </li>
    );
};

export default Features
