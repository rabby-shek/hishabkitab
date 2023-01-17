import React from 'react'
import './shop.css'
import Navbar from '../navbar'
import Foter from '../foteer/Foter'
import Card from '../custom_card/Card'

const Shop = () => {
  console.log("shop");
  return (
    <div> 
    <Navbar />
    <Card />
    <Foter />
    </div>
  )
}

export default Shop