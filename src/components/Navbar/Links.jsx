import React from 'react'

const Links = ({ navbar }) => {
    // console.log(navbar);
    
  return (
      <li className='hover:text-amber-500'><a href={navbar.path}>{ navbar.name}</a></li>
  )
}

export default Links
