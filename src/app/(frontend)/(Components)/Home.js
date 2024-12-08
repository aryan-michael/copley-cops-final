import React from 'react'
import Hero from './Hero'
import Slogan from './Slogan'
import ServiceCards from './ServiceCards'
import Industries from './Industries'
import Infrastructure from './Infrastructure'

const Home = () => {
  return (
    <div className='container space-y-12'>
      <Hero />
      <Slogan />
      <ServiceCards />
      <Industries />
      <Infrastructure />
      </div>
  )
}

export default Home