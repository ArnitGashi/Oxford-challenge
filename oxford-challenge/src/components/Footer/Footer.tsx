import React from 'react'

import BodyText from '../../shared/Typography/BodyText'

const Footer = () => {
  return (
    <footer className='text-center py-[83px] bg-gray-200'>
        <BodyText 
            content="© 2023 by Oxford Property Group & Oxford Property Partners & Oxford Property Group USA - Licensed Real Estate Brokers"
            fontFamilyClass='font-inter-regular'
            fontSizeClass='text-sm'
            colorClass='text-white'
        />
    </footer>
  )
}

export default Footer